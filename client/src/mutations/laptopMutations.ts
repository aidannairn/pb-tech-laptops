import { gql } from "@apollo/client";

const ADD_LAPTOP = gql`
  mutation AddLaptop(
    $name: String!
    $types: [String!]!
    $quantity: Int!
    $price: Int!
    $images: [String!]!
  ) {
    addLaptop(
      name: $name
      types: $types
      quantity: $quantity
      price: $price
      images: $images
    ) {
      name
      types
      quantity
      price
      images
    }
  }
`

const DELETE_LAPTOP = gql`
  mutation DeleteLaptop($id: ID!) {
    deleteLaptop(id: $id) {
      id
    }
  }
`

export { ADD_LAPTOP, DELETE_LAPTOP };
