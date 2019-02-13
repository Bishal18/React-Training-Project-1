/* Bishal */

import React from "react";
import ProductSection from "../containers/ProductSection";
import FilterSection from "../containers/FilterSection";
import * as filtertypes from "../configs/filterScenarios";

let filterSettings = {
    type: "",
    params: []
  },
  filterVal = 0;
const ProductListing = props => {
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
    filterVal = categoryId;
  }
  return (
    <div>
      <FilterSection filterVal={filterVal} />
      <ProductSection filterSettings={filterSettings} />
    </div>
  );
};

export default ProductListing;
