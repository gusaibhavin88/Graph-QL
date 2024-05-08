import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query userList {
    userList {
      _id
      name
      email
      work
      add
      mobile
      desc
      age
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      _id
      name
      email
      work
      add
      mobile
      desc
      age
    }
  }
`;
