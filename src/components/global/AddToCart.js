import React from "react";
const AddToCart = props => {
  let { productAdded, productFromCart } = props;
  let productDetails = productFromCart[`ProductId-${productAdded.id}`]?productFromCart[`ProductId-${productAdded.id}`].productDetails : {quantity:0};
  
  let clickHandler = event => {
    switch (event.target.name) {
      case "AddToCart":
        productAdded.quantity = productDetails.quantity + 1;
        break;
      case "DeleteFromCart":
        productAdded.quantity = productDetails.quantity - 1;
        break;
      default: //do nothing
    }
    if(productAdded.quantity) {
        props.addToCart({ [`ProductId-${productAdded.id}`]: { productDetails : productAdded } });
    } else {
        props.removeFromCart(`ProductId-${productAdded.id}`);
    }   
    
  };
  console.log(productAdded,productDetails,productFromCart);
  return (
    <span>
      {productFromCart[`ProductId-${productAdded.id}`]? (
        <span>
          <button
            type="button"
            className="btn-group-xs btn-secondary"
            name="DeleteFromCart"
            onClick={clickHandler}
          >
            -
          </button>
          <span>{productFromCart[`ProductId-${productAdded.id}`].productDetails.quantity}</span>
          <button
            type="button"
            className="btn-group-xs btn-secondary"
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

export default AddToCart;
