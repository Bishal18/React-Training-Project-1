/* Surya, Modified by Bishal */
import React from "react";
import CartTable from "../components/CartTable";

const Cart = props => {
  const pdtList = props.productData;

  return (
    <div>
      <CartTable
        productDetails={pdtList}
        func={props.removeFromCart}
        page="cart"
      />
    </div>
  );
};

export default Cart;
