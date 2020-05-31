/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const cancelMembership = /* GraphQL */ `
  mutation CancelMembership($id: ID) {
    cancelMembership(id: $id)
  }
`;
export const resumeMembership = /* GraphQL */ `
  mutation ResumeMembership($id: ID) {
    resumeMembership(id: $id)
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      avatar
      membership {
        id
        plan
        period
        status
        stripeMetaData {
          stripeCheckoutSession
          stripeSubscription
          stripeCustomer
        }
        user {
          id
          email
          avatar
          createdAt
          updatedAt
        }
        createdAt
        expiresAt
        updatedAt
      }
      courses {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          title
          reviewCourseId
          reviewUserId
          points
          review
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      avatar
      membership {
        id
        plan
        period
        status
        stripeMetaData {
          stripeCheckoutSession
          stripeSubscription
          stripeCustomer
        }
        user {
          id
          email
          avatar
          createdAt
          updatedAt
        }
        createdAt
        expiresAt
        updatedAt
      }
      courses {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          title
          reviewCourseId
          reviewUserId
          points
          review
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      avatar
      membership {
        id
        plan
        period
        status
        stripeMetaData {
          stripeCheckoutSession
          stripeSubscription
          stripeCustomer
        }
        user {
          id
          email
          avatar
          createdAt
          updatedAt
        }
        createdAt
        expiresAt
        updatedAt
      }
      courses {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          title
          reviewCourseId
          reviewUserId
          points
          review
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudentMembership = /* GraphQL */ `
  mutation CreateStudentMembership(
    $input: CreateStudentMembershipInput!
    $condition: ModelStudentMembershipConditionInput
  ) {
    createStudentMembership(input: $input, condition: $condition) {
      id
      plan
      period
      status
      stripeMetaData {
        stripeCheckoutSession
        stripeSubscription
        stripeCustomer
      }
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      expiresAt
      updatedAt
    }
  }
`;
export const updateStudentMembership = /* GraphQL */ `
  mutation UpdateStudentMembership(
    $input: UpdateStudentMembershipInput!
    $condition: ModelStudentMembershipConditionInput
  ) {
    updateStudentMembership(input: $input, condition: $condition) {
      id
      plan
      period
      status
      stripeMetaData {
        stripeCheckoutSession
        stripeSubscription
        stripeCustomer
      }
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      expiresAt
      updatedAt
    }
  }
`;
export const deleteStudentMembership = /* GraphQL */ `
  mutation DeleteStudentMembership(
    $input: DeleteStudentMembershipInput!
    $condition: ModelStudentMembershipConditionInput
  ) {
    deleteStudentMembership(input: $input, condition: $condition) {
      id
      plan
      period
      status
      stripeMetaData {
        stripeCheckoutSession
        stripeSubscription
        stripeCustomer
      }
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      expiresAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      title
      description
      image {
        name
        size
        folder
        bucket
        region
        key
        mime
      }
      category
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          title
          reviewCourseId
          reviewUserId
          points
          review
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      title
      description
      image {
        name
        size
        folder
        bucket
        region
        key
        mime
      }
      category
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          title
          reviewCourseId
          reviewUserId
          points
          review
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      title
      description
      image {
        name
        size
        folder
        bucket
        region
        key
        mime
      }
      category
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          title
          reviewCourseId
          reviewUserId
          points
          review
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const createCourseUser = /* GraphQL */ `
  mutation CreateCourseUser(
    $input: CreateCourseUserInput!
    $condition: ModelCourseUserConditionInput
  ) {
    createCourseUser(input: $input, condition: $condition) {
      id
      course {
        id
        title
        description
        image {
          name
          size
          folder
          bucket
          region
          key
          mime
        }
        category
        users {
          nextToken
        }
        reviews {
          nextToken
        }
        status
        createdAt
        updatedAt
        deletedAt
      }
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseUser = /* GraphQL */ `
  mutation UpdateCourseUser(
    $input: UpdateCourseUserInput!
    $condition: ModelCourseUserConditionInput
  ) {
    updateCourseUser(input: $input, condition: $condition) {
      id
      course {
        id
        title
        description
        image {
          name
          size
          folder
          bucket
          region
          key
          mime
        }
        category
        users {
          nextToken
        }
        reviews {
          nextToken
        }
        status
        createdAt
        updatedAt
        deletedAt
      }
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseUser = /* GraphQL */ `
  mutation DeleteCourseUser(
    $input: DeleteCourseUserInput!
    $condition: ModelCourseUserConditionInput
  ) {
    deleteCourseUser(input: $input, condition: $condition) {
      id
      course {
        id
        title
        description
        image {
          name
          size
          folder
          bucket
          region
          key
          mime
        }
        category
        users {
          nextToken
        }
        reviews {
          nextToken
        }
        status
        createdAt
        updatedAt
        deletedAt
      }
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      title
      course {
        id
        title
        description
        image {
          name
          size
          folder
          bucket
          region
          key
          mime
        }
        category
        users {
          nextToken
        }
        reviews {
          nextToken
        }
        status
        createdAt
        updatedAt
        deletedAt
      }
      reviewCourseId
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      reviewUserId
      points
      review
      createdAt
      updatedAt
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      title
      course {
        id
        title
        description
        image {
          name
          size
          folder
          bucket
          region
          key
          mime
        }
        category
        users {
          nextToken
        }
        reviews {
          nextToken
        }
        status
        createdAt
        updatedAt
        deletedAt
      }
      reviewCourseId
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      reviewUserId
      points
      review
      createdAt
      updatedAt
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      title
      course {
        id
        title
        description
        image {
          name
          size
          folder
          bucket
          region
          key
          mime
        }
        category
        users {
          nextToken
        }
        reviews {
          nextToken
        }
        status
        createdAt
        updatedAt
        deletedAt
      }
      reviewCourseId
      user {
        id
        email
        avatar
        membership {
          id
          plan
          period
          status
          createdAt
          expiresAt
          updatedAt
        }
        courses {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      reviewUserId
      points
      review
      createdAt
      updatedAt
    }
  }
`;
