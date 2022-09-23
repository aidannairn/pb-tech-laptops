import React from "react";
import Banner from "../components/Banner/Banner";
import BusinessBanner from "../components/BusinessBanner/BusinessBanner";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import QuizBanner from "../components/QuizBanner/QuizBanner";
import ShopBy from "../components/shopBy/ShopBy";
import ShopByBrand from "../components/ShopByBrand/ShopByBrand";
// import { useQuery } from "@apollo/client";
// import { GET_ALL_LAPTOPS } from "../queries/laptopQueries";

// interface Laptop {
//   name: string
//   brand: string
//   caption?: string
//   types?: [string]
//   price: number
//   images: string
//   isTrending: boolean
//   isOnSpecial: boolean
//   amountSold: number
//   userRatings: [number]
// }

// interface Data {
// laptops: Laptop[]
// }

const LandingPage: React.FC = () => {

  return (
    <>
      <Banner></Banner>
      <ShopBy></ShopBy>
      <QuizBanner></QuizBanner>
      <Carousel></Carousel>
      <ShopByBrand></ShopByBrand>
      <BusinessBanner></BusinessBanner>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
