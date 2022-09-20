import { gql } from "@apollo/client";

const ADD_LAPTOP = gql`
  mutation AddLaptop(
    $name: String!
    $brand: String!
    $types: [String!]!
    $quantity: Int!
    $price: Float!
    $operatingSystem: String!,
    $ram: String!
    $storage: String!
    $sizeInInches: String!
    $isTrending: Boolean
    $isOnSpecial: Boolean
    $amountSold: Int!
    $userRatings: [Int!]!
    $images: [String!]!
    $bundleIDs: [ID!]
  ) {
    addLaptop(
      name: $name
      brand: $brand
      types: $types
      quantity: $quantity
      price: $price
      operatingSystem: $operatingSystem
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
      id
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
