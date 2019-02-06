import React, { Component } from "react";

class CategoryCard extends Component {
  render() {
    let { name, imageUrl } = this.props.categoryData;
    return (
      <div className="card" >
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default CategoryCard;
