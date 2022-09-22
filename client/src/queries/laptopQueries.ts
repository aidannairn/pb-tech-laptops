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

const GET_LAPTOP = gql`
  query GetLaptop($id: ID!) {
    getLaptop(id: $id) {
      ${allLaptopFieldsStr}

    }
  }
`;

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

export { GET_LAPTOPS, GET_LAPTOP, GET_LAPTOP_AND_BUNDLE };
