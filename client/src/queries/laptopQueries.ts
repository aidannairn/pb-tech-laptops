import { gql } from '@apollo/client'

const allLaptopFields = [ 'id', 'name', 'types', 'price', 'images', 'isTrending', 'isOnSpecial', 'caption', 'userRatings', 'amountSold', 'operatingSystem', 'brand', 'storage', 'ram' ]
const allLaptopFieldsStr = allLaptopFields.join(' ')

const GET_LAPTOPS = gql`
  query getLaptops {
    laptops {
      ${allLaptopFieldsStr}
    }
  }
`

const GET_LAPTOP = gql`
  query GetLaptop($id: ID!) {
    getLaptop(id: $id) {
      ${allLaptopFieldsStr}
    }
  }
`

export { GET_LAPTOPS, GET_LAPTOP }