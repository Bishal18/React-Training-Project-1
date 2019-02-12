// Surya

import React from "react";
import AddToCart from '../containers/AddToCart';
import CartTable from '../components/CartTable';


const Cart = (props) => {
  
  const pdtList = props.productData;
  console.log("pdtList ", pdtList)
  
 
  return (
    <div>
      <CartTable productDetails={pdtList} func={props.removeFromCart} page="cart" />
    </div>
  );
};

export default Cart;