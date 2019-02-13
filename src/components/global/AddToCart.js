/* Bishal */

import React from "react";
import {withRouter} from "react-router-dom";
const AddToCart = props => {
  let { productAdded, productFromCart } = props;
  let productDetails = productFromCart[`ProductId-${productAdded.id}`]
    ? productFromCart[`ProductId-${productAdded.id}`].productDetails
    : { quantity: 0 };

  let clickHandler = event => {
    switch (event.target.name) {
      case "AddToCart":
      case "BuyNow":
        productAdded.quantity = productDetails.quantity + 1;
        break;
      case "DeleteFromCart":
        productAdded.quantity = productDetails.quantity - 1;
        break;
      default: //do nothing
    }
    productAdded.total = productAdded.price * productAdded.quantity;
    if (productAdded.quantity) {
      props.addToCart({
        [`ProductId-${productAdded.id}`]: { productDetails: productAdded }
      });
      if(props.buyNowMode) {
        props.history.push('/checkout');
      }
    } else {
      props.removeFromCart(`ProductId-${productAdded.id}`);
    }
  };
  return (
    <span>
      {props.buyNowMode ? (
        <span>
          <button
            type="button"
            className="btn btn-primary"
            name="BuyNow"
            onClick={clickHandler}
          >
            Buy Now
          </button>
        </span>
      ) : productFromCart[`ProductId-${productAdded.id}`] ? (
        <span>
          <button
            type="button"
            className="btn btn-secondary"
            name="DeleteFromCart"
            onClick={clickHandler}
          >
            -
          </button>
          <span>
            {" "}
            {
              productFromCart[`ProductId-${productAdded.id}`].productDetails
                .quantity
            }{" "}
          </span>
          <button
            type="button"
            className="btn btn-secondary"
            name="AddToCart"
            onClick={clickHandler}
          >
            +
          </button>
        </span>
      ) : (
        <button
          type="button"
          className="btn btn-secondary"
          name="AddToCart"
          onClick={clickHandler}
        >
          +Cart
        </button>
      )}
    </span>
  );
};

export default withRouter(AddToCart);
