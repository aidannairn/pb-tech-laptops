import { gql } from "@apollo/client";

const allLaptopFields = [ 'id', 'name', 'types', 'price', 'images', 'isTrending', 'isOnSpecial', 'caption', 'userRatings', 'amountSold', 'operatingSystem', 'brand', 'storage', 'ram', 'sizeInInches' ]
const allLaptopFieldsStr = allLaptopFields.join(' ')

const GET_LAPTOPS = gql`
  query getLaptops {
    laptops {
      ${allLaptopFieldsStr}
    }
  }
`;

const GET_LAPTOPS_BY_TYPE = gql`
  query getLaptopsByType($type: String!) {
    laptopsByType(type: $type) {
      ${allLaptopFieldsStr}
    }
  }
`;

const GET_ALL_LAPTOPS = gql`
  query getAllLaptops {
    laptops {
      name
      brand
      caption
      types
      price
      images
      isTrending
      isOnSpecial
      amountSold
      userRatings
    }
  }`

const GET_LAPTOP_AND_BUNDLE = gql`
  query getLaptop($id: ID!) {
    laptop(id: $id) {
      types
      name
      images
      caption
      price
      userRatings
      bundles {
        type
        laptopExtras {
          name
          price
          images
        }
      }
    }
  }
`;

export { GET_LAPTOPS, GET_LAPTOP_AND_BUNDLE, GET_LAPTOPS_BY_TYPE, GET_ALL_LAPTOPS };
