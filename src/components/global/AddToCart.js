import React, { Component } from 'react';

class AddToCart extends Component {
    state = {
        productsAdded: 0,
        expandedButton: false,
        productDetails: this.props.productDetails 
    }
    componentDidMount() {
        this.setState({pr})
    }
    clickHandler = (event) => {
        switch (event.target.name) {
            case 'AddToCart' : 
            case 'DeleteFromCart' : 
        }
    }
    render() {
        return (
            <span>
                {this.state.expandedButton? 
                <span><button type="button" className="btn-group-xs btn-secondary" onClick={this.clickHandler}>-</button>
                <span>{ this.state.productsAdded }</span>
                <button type="button" className="btn-group-xs btn-secondary" onClick={this.clickHandler}>+</button></span>:
                <button type="button" className="btn btn-secondary" onClick={this.clickHandler}>+Cart</button>
                }
            </span>
        );
    }
}

export default AddToCart;