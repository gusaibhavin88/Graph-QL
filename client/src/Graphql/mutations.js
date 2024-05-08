import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $add: String!
    $desc: String!
    $age: Int!
    $mobile: Int!
  ) {
    createUser(
      name: $name
      email: $email
      add: $add
      desc: $desc
      age: $age
      mobile: $mobile
    ) {
      success
      message
      __typename
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      success
      message
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser($id: String!) {
    editUser(id: $id) {
      success
      message
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $name: String!
    $email: String!
    $add: String!
    $desc: String!
    $age: Int!
    $mobile: Int!
    $id: String!
    $work: String!
  ) {
    updateUser(
      name: $name
      email: $email
      add: $add
      desc: $desc
      age: $age
      mobile: $mobile
      id: $id
      work: $work
    ) {
      success
      message
    }
  }
`;
