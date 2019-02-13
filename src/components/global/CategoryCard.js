/* Apoorva, Modified by Bishal */

import React from "react";
import Button from "./Button";
import { withRouter } from "react-router-dom";

const CategoryCard = props => {
  let { name, imageUrl } = props.categoryData;
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Button
          onClickHandler={() =>
            props.history.push(`/products/byCategory/${props.categoryData.id}`)
          }
        >
          More
        </Button>
      </div>
    </div>
  );
};

export default withRouter(CategoryCard);
