import { gql } from '@apollo/client'

const ADD_LAPTOP = gql`
  mutation AddLaptop(
    $name: String!,
    $types: []!,
    $quantity: Int!,
    $price: Int!,
    $images: []!
  ) {
    addLaptop(
      name: $name,
      types: $types,
      quantity: $quantity,
      price: $price,
      images: $images
    ) {
      id
      name
      types
      quantity
      price
      images
    }
  }
`

export { ADD_LAPTOP }