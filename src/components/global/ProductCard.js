import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    let { name, shortDescription, imageUrl, ratings } = this.props.productData;
    return (
      <div className="card" >
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{shortDescription}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default ProductCard;
