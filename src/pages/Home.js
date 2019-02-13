/* Bishal */
import React from "react";
import Carousel from "../components/Carousel";
import ProductSection from "../containers/ProductSection";
import * as filters from "../configs/filterScenarios";

let filterSettings = {
  type: filters.BESTSELLER,
  params: []
};
const Home = () => {
  return (
    <div>
      <Carousel />
      <br />
      <h3>BestSellers</h3>
      <ProductSection filterSettings={filterSettings} />
    </div>
  );
};

export default Home;
