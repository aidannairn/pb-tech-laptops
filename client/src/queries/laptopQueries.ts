import { gql } from "@apollo/client";

const allLaptopFields = ["id", "name", "types", "quantity", "price", "images"];
const allLaptopFieldsStr = allLaptopFields.join(" ");

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
  }
`;

export { GET_LAPTOPS, GET_LAPTOP, GET_ALL_LAPTOPS };
