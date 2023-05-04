import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      profileImageURL
      email
      firstName
      lastName
      recommendedUsers {
        id
        firstName
        lastName
        profileImageURL
      }
      followers {
        id
        firstName
        lastName
        profileImageURL
      }
      following {
        id
        firstName
        lastName
        profileImageURL
      }
      tweets {
        id
        content
        author {
          id
          firstName
          lastName
          profileImageURL
        }
      }
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  query GetuserById($id: ID!) {
    getUserById(id: $id) {
      id
      firstName
      lastName
      profileImageURL

      followers {
        id
        firstName
        lastName
        profileImageURL
      }
      following {
        id
        firstName
        lastName
        profileImageURL
      }
      tweets {
        content
        id
        author {
          id
          firstName
          lastName
          profileImageURL
        }
      }
    }
  }
`);
