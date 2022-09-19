import React from "react";
import Banner from "../components/Banner/Banner";
import QuizBanner from "../components/QuizBanner/QuizBanner";
import ShopBy from "../components/shopBy/ShopBy";

const LandingPage: React.FC = () => {
  return (
    <>
      <Banner></Banner>
      <ShopBy></ShopBy>
      <QuizBanner></QuizBanner>
    </>
  );
};

export default LandingPage;
