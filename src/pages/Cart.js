import React from "react";
import AddToCart from '../containers/AddToCart';

const Cart = (props) => {
  const heading = ["Name", "Price", "Qty", "Total", "Remove"];
  const headingList = heading.map(name => {
    return <th>{name}</th>;
  });
  const pdtList = props.productData;
  console.log(pdtList);
  return (
    <table className="table">
      <thead>
        <tr>{headingList}</tr>
      </thead>
      <tbody>

        {Object.keys(pdtList).map((key) => <tr><td>{pdtList[key].productDetails.name}</td>
          <td >{pdtList[key].productDetails.price}</td>
          <td ><AddToCart productAdded={pdtList[key].productDetails} /></td>
          <td >{pdtList[key].productDetails.total}</td>
          <td>{<input className="btn btn-danger" type="button" value="Remove" onClick={() => props.removeFromCart(key)} />}</td></tr>)}

      </tbody>
    </table>
  );
};

export default Cart;