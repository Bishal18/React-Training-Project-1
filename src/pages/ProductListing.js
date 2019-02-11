import React from "react";
import ProductSection from "../containers/ProductSection";
import FilterSection from "../containers/FilterSection";
import * as filtertypes from "../configs/filterScenarios";

let filterSettings = {
  type: "",
  params: []
};
const ProductListing = (props) => {
  let { categoryId } = props.match.params;
  if (categoryId) {
    filterSettings = {
      type: filtertypes.SEARCHANDFILTER,
      params: [
        {
          field: "categoryId",
          value: categoryId
        }
      ]
    };
  }

  return (
    <div>
      <FilterSection />
      <ProductSection filterSettings={filterSettings} />
    </div>
  );
};

export default ProductListing;
