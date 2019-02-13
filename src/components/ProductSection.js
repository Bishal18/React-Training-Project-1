/* Bishal */
import React, { Component } from "react";
import ProductCard from "../containers/ProductCard";
class ProductSection extends Component {
  componentDidMount() {
    this.props.fetchAllProductData(this.props.filterSettings);
  }
  render() {
    let products = this.props.products;
    return (
      <div className="row">
        {products.length === 0 ? (
          <div
            className="col col-xl-3 col-sm-4 col-xs-2"
          >
            <h3>No records found</h3>
            <br />
          </div>
        ) : (
          products.map(productData => (
            <div
              className="col col-xl-3 col-sm-4 col-xs-2"
              key={productData.name}
            >
              <ProductCard productData={productData} />
              <br />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default ProductSection;
