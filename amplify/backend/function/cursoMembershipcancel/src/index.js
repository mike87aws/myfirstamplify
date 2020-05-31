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
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const moment = require('moment');


exports.handler = async (event) => {
    try {
        console.log("CANCEL MEMBERSHIP CALLED!");
        const { id } = event.arguments;
        const params = {
            TableName: StudentMembershipTableName,
            Key: { id },
        };
        console.log("PARAMS %j", params);
        const membership = await docClient.get(params).promise();
        console.log("MEMBERSHIP %j", membership);
        const subscription = membership.Item.stripeMetaData.stripeSubscription;
        const cancel = await stripe.subscriptions.update(subscription, { cancel_at_period_end: true });
        const expiresAt = moment.unix(cancel.current_period_end).toISOString();
        const updateParams = {
            TableName: StudentMembershipTableName,
            Key: { id },
            UpdateExpression: "set #expiresAt = :expiresAt",
            ExpressionAttributeNames: {
                "#expiresAt": "expiresAt",
            },
            ExpressionAttributeValues: {
                ":expiresAt": expiresAt,
            }
        };
        await docClient.update(updateParams).promise();

        return {
            statusCode: 200,
            body: JSON.stringify('Subscription Canceled Successfully!'),
        };
    } catch (e) {
        console.log("ERROR GLOBAL ON CATCH: ", e);
        return {
            statusCode: e.code,
            body: JSON.stringify('Subscription Not Canceled!'),
        };
    }
};

