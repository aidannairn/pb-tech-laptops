import { gql } from '@apollo/client'

const GET_LAPTOPS = gql`
  query getLaptops {
    laptops {
      id
      name
      type
      quantity
      price
      images
    }
  }
`

export { GET_LAPTOPS }