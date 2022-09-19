import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import QuizBanner from "../components/QuizBanner/QuizBanner";
import ShopBy from "../components/shopBy/ShopBy";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <ShopBy></ShopBy>
      <QuizBanner></QuizBanner>
    </>
  );
};

export default LandingPage;
