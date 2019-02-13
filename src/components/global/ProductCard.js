/* Bishal */ /* Will use global button later, by adding parameters as i had done with slickslider */
import React from "react";
import RatingStars from "./RatingStars";
import { withRouter } from "react-router-dom";
import AddToCart from "../../containers/AddToCart";
/* import Button from "./Button"; */

const ProductCard = props => {
  let {
      name,
      shortDescription,
      imageUrl,
      ratings,
      price,
      id
    } = props.productData,
    productDetails = {
      name,
      price,
      id
    };
  return (
    <div className="card">
      <img
        src={imageUrl}
        onClick={() => props.history.push(`/products/${props.productData.id}`)}
        className="card-img-top"
        alt={name}
        style={{ cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <RatingStars ratings={ratings} />
        <p className="card-text">{shortDescription}</p>
        <div className="row">
          <div className="col-auto mr-auto">
            <AddToCart productAdded={productDetails} buyNowMode = {true}/>
          </div>
          <div className="col-auto">
            <AddToCart productAdded={productDetails} buyNowMode = {false}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductCard);
