import React, { Component } from "react";
import RatingStars from "./RatingStars";
import Button  from "./Button";
import {withRouter} from 'react-router-dom';
import AddToCart from "../../containers/AddToCart";
class ProductCard extends Component {
  onProductClick = () => {
    this.props.history.push(`/products/${this.props.productData.id}`);
  } 
  render() {
    let { name, shortDescription, imageUrl, ratings, price, id } = this.props.productData;
    let quantity = 1;
    this.productDetails = {
      name,
      price,
      quantity,
      total: price * quantity,
      id
    }
    return (
      <div className="card" >
        <img src={imageUrl} onClick={this.onProductClick} className="card-img-top" alt={name} style={{cursor:'pointer'}} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <RatingStars ratings={ratings} />
          <p className="card-text">{shortDescription}</p>
          {/* <Button onClickHandler={() => this.props.addToCart({[`ProductId-${this.props.productData.id}`]: {productDetails: this.productDetails}})}>
            Buy Now
          </Button > */}
          <AddToCart productAdded = {this.productDetails}/>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductCard);
