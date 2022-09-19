import { gql } from "@apollo/client";

const ADD_LAPTOP = gql`
  mutation AddLaptop(
    $name: String!
    $types: [String!]!
    $quantity: Int!
    $price: Int!
    $ram: String!
    $storage: String!
    $sizeInInches: String!
    $isTrending: Boolean
    $isOnSpecial: Boolean
    $amountSold: Int!
    $userRatings: [Int!]!
    $images: [String!]!
    $bundleIDs: [String]
  ) {
    addLaptop(
      name: $name
      types: $types
      quantity: $quantity
      price: $price
      ram: $ram
      storage: $storage
      sizeInInches: $sizeInInches
      isTrending: $isTrending
      isOnSpecial: $isOnSpecial
      amountSold: $amountSold
      userRatings: $userRatings
      images: $images
      bundleIDs: $bundleIDs
    ) {
      name
      types
      quantity
      price
      ram
      storage
      sizeInInches
      isTrending
      isOnSpecial
      amountSold
      userRatings
      images
      bundles
    }
  }
`

const UPDATE_LAPTOP = gql`
  mutation UpdateLaptop($id: ID! $name: String! $types: [String!]! $quantity: Int! $price: Int! $images: [String!]!) {
    updateProject(id: $id name: $name types: $types quantity: $quantity price: $price images: $images) {
      id
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

export { ADD_LAPTOP, DELETE_LAPTOP, UPDATE_LAPTOP };
