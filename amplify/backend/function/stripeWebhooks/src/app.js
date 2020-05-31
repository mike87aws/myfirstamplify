/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_CURSOAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_CURSOAPP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const environment = process.env.ENV;
const region = process.env.REGION;
AWS.config.update({ region });
const APIId = process.env.API_CURSOMEMBERSHIPSAPPSYNC_GRAPHQLAPIIDOUTPUT;
const StudentMembershipTableName = `StudentMembership-${APIId}-${environment}`;
const docClient = new AWS.DynamoDB.DocumentClient();

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const webhookSecret = process.env.WEBHOOK_SECRET;

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


app.post('/stripe/webhooks', async function(req, res) {
  // Add your code here
  console.log("/stripe/webhooks POST received");

  console.log("REQ", req.body);
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], webhookSecret);
    switch (event.type) {
      case 'checkout.session.completed': {
        const checkoutObject = event.data.object;
        console.log(checkoutObject);

        const plan = checkoutObject.display_items[0].plan;
        console.log("PLAN:", plan);

        const interval = plan.interval;
        console.log("INTERVAL:", interval);

        const updateParams = {
          TableName: StudentMembershipTableName,
          Key: {
            id: checkoutObject.client_reference_id
          },
          UpdateExpression: "set #statusCreatedAt = :statusCreatedAt, #stripe.#checkoutSession = :checkoutSession, #stripe.#stripeSubscription = :subscription, #stripe.#stripeCustomer = :customer, #status = :status",
          ExpressionAttributeNames: {
            "#stripe": "stripeMetaData",
            "#checkoutSession": "stripeCheckoutSession",
            "#stripeSubscription": "stripeSubscription",
            "#stripeCustomer": "stripeCustomer",
            "#status": "status",
            "#statusCreatedAt": "status#createdAt"
          },
          ExpressionAttributeValues: {
            ":checkoutSession": checkoutObject.id,
            ":subscription": checkoutObject.subscription,
            ":customer": checkoutObject.customer,
            ":status": "ACTIVE",
            ":statusCreatedAt": `ACTIVE#${new Date().toISOString()}`
          }
        };
        try {
          await docClient.update(updateParams).promise();
          await res.json({success: 'Stripe checkout.session.completed!', data: event.data});
        } catch (err) {
          console.log("ERROR UPDATING SUBSCRIPTION %j", err);
          console.error(
            `Internal Error: Error updating dynamoDB record with keys [${JSON.stringify(
              updateParams.Key
            )}] and Attributes [${JSON.stringify(
              updateParams.ExpressionAttributeValues
            )}]`
          );
        }
        break;
      }
      case 'customer.subscription.deleted': {
        console.log("customer.subscription.deleted");
        const subscriptionObject = event.data.object;
        console.log("STRIPE SUBSCRIPTION OBJECT %j: ", subscriptionObject);

        // SCAN SUBSCRIPTIONS
        const scanParams = {
          TableName: StudentMembershipTableName,
          FilterExpression: '#stripe.#stripeSubscription = :subscription',
          ExpressionAttributeNames: {
            "#stripe": "stripeMetaData",
            "#stripeSubscription": "stripeSubscription"
          },
          ExpressionAttributeValues: {
            ":subscription": subscriptionObject.id,
          }
        };
        console.log("SCAN PARAMS %j: ", scanParams);

        try {
          const scan = await docClient.scan(scanParams).promise();
          console.log("SCAN RESULT %j: ", scan);

          const updateParams = {
            TableName: StudentMembershipTableName,
            Key: {
              id: scan.Items[0].id
            },
            UpdateExpression: "set #statusCreatedAt = :statusCreatedAt, #status = :status",
            ExpressionAttributeNames: {
              "#status": "status",
              "#statusCreatedAt": "status#createdAt"
            },
            ExpressionAttributeValues: {
              ":status": "CANCELLED",
              ":statusCreatedAt": `CANCELLED#${new Date().toISOString()}`
            }
          };
          try {
            await docClient.update(updateParams).promise();
            await res.json({success: 'Stripe Subscription Cancelled', data: event.data});
          } catch (err) {
            console.error(
              `Internal Error: Error updating dynamoDB record with keys [${JSON.stringify(
                updateParams.Key
              )}] and Attributes [${JSON.stringify(
                updateParams.ExpressionAttributeValues
              )}]`
            );
          }
        } catch (e) {
          console.error(
            `Internal Error: Error updating dynamoDB record with keys [${JSON.stringify(
              scanParams.Key
            )}] and Attributes [${JSON.stringify(
              scanParams.ExpressionAttributeValues
            )}]`
          );
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
