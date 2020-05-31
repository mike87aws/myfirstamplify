/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateStudentMembership = /* GraphQL */ `
  subscription OnCreateStudentMembership {
    onCreateStudentMembership {
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
export const onUpdateStudentMembership = /* GraphQL */ `
  subscription OnUpdateStudentMembership {
    onUpdateStudentMembership {
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
export const onDeleteStudentMembership = /* GraphQL */ `
  subscription OnDeleteStudentMembership {
    onDeleteStudentMembership {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateCourseUser = /* GraphQL */ `
  subscription OnCreateCourseUser {
    onCreateCourseUser {
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
export const onUpdateCourseUser = /* GraphQL */ `
  subscription OnUpdateCourseUser {
    onUpdateCourseUser {
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
export const onDeleteCourseUser = /* GraphQL */ `
  subscription OnDeleteCourseUser {
    onDeleteCourseUser {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
