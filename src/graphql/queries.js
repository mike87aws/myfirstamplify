/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStudentMembership = /* GraphQL */ `
  query GetStudentMembership($id: ID!) {
    getStudentMembership(id: $id) {
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
export const listStudentMemberships = /* GraphQL */ `
  query ListStudentMemberships(
    $filter: ModelStudentMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentMemberships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        course {
          id
          title
          description
          category
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
          createdAt
          updatedAt
        }
        reviewUserId
        points
        review
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserByEmailSortByCreatedAt = /* GraphQL */ `
  query GetUserByEmailSortByCreatedAt(
    $email: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByEmailSortByCreatedAt(
      email: $email
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMembershipsByPlanStatusCreatedAt = /* GraphQL */ `
  query GetMembershipsByPlanStatusCreatedAt(
    $plan: String
    $statusCreatedAt: ModelStudentMembershipMembershipsByPlanStatusCreatedAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStudentMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getMembershipsByPlanStatusCreatedAt(
      plan: $plan
      statusCreatedAt: $statusCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCoursesByCategoryStatusCreatedAt = /* GraphQL */ `
  query GetCoursesByCategoryStatusCreatedAt(
    $category: String
    $statusCreatedAt: ModelCourseCoursesByCategoryStatusCreatedAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCoursesByCategoryStatusCreatedAt(
      category: $category
      statusCreatedAt: $statusCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCoursesByStatusCreatedAt = /* GraphQL */ `
  query GetCoursesByStatusCreatedAt(
    $status: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCoursesByStatusCreatedAt(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getReviewsByUserSortByCreatedAt = /* GraphQL */ `
  query GetReviewsByUserSortByCreatedAt(
    $reviewUserId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getReviewsByUserSortByCreatedAt(
      reviewUserId: $reviewUserId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        course {
          id
          title
          description
          category
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
          createdAt
          updatedAt
        }
        reviewUserId
        points
        review
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReviewsByCourseSortByCreatedAt = /* GraphQL */ `
  query GetReviewsByCourseSortByCreatedAt(
    $reviewCourseId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getReviewsByCourseSortByCreatedAt(
      reviewCourseId: $reviewCourseId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        course {
          id
          title
          description
          category
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
          createdAt
          updatedAt
        }
        reviewUserId
        points
        review
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const searchCourses = /* GraphQL */ `
  query SearchCourses(
    $filter: SearchableCourseFilterInput
    $sort: SearchableCourseSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchCourses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
