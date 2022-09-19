import React from "react";
<<<<<<< HEAD
import Header from "../components/Header/Header";

const LandingPage: React.FC = () => {
  return <Header></Header>;
=======
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
>>>>>>> main
};

export default LandingPage;
