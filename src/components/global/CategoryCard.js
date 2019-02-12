// Apoorva
import React, { Component } from "react";
import Button from "./Button";
import {withRouter} from 'react-router-dom';
class CategoryCard extends Component {
  onClickHandler = () => {
    this.props.history.push(`/products/byCategory/${this.props.categoryData.id}`);  
  }
  render() {
    let { name, imageUrl } = this.props.categoryData;
    return (
      <div className="card" >
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Button onClickHandler={this.onClickHandler}>
            More
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryCard);
