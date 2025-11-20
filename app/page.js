import React from "react";
import Banner from "./components/home/Banner";
import Featured from "./components/home/Featured";
import GridDisplay from "./components/home/GridDisplay";
import BestSelling from "./components/home/BestSelling";
import FlashSale from "./components/home/FlashSale";
import Journal from "./components/home/Journal";
import BrandLogos from "./components/home/BrandLogos";

const page = () => {
  return (
    <>
      <Banner />
      <Featured />
      <GridDisplay />
      {/* <BestSelling /> */}
      <FlashSale />
      <Journal />
      <BrandLogos />
    </>
  );
};

export default page;
