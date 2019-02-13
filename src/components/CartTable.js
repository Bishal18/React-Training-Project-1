/* Surya, Modified by Bishal */
import React from "react";
import {withRouter} from "react-router-dom";
import AddToCart from "../containers/AddToCart";
import config from "../configs/config";


const CartTable = props => {
  const headingList = config.cartHeader.map(name => {
    return <th key={name}>{name}</th>;
  });
  const pdtList = props.productDetails;
  return (
    <table className="table">
      <thead>
        <tr>{headingList}</tr>
      </thead>
      <tbody>
        {Object.keys(pdtList).map(key => (
          <tr>
            <td>{pdtList[key].productDetails.name}</td>
            <td>{pdtList[key].productDetails.price}</td>
            <td>
              {props.page === "checkout" ? (
                pdtList[key].productDetails.quantity
              ) : (
                <AddToCart productAdded={pdtList[key].productDetails} />
              )}
            </td>
            <td>{pdtList[key].productDetails.total}</td>
            {props.page !== "checkout" && (
              <td>
                {
                  <input
                    className="btn btn-danger"
                    type="button"
                    value="Remove"
                    onClick={() => props.func(key)}
                  />
                }
              </td>
            )}
          </tr>
        ))}
      </tbody>

      {props.page !== "checkout" && (
        <button
          className="btn btn-primary"
          onClick={() => props.history.push("./checkout")}
        >
          Checkout
        </button>
      )}
    </table>
  );
};

export default withRouter(CartTable);
