
//Apoorva
import React, { Component } from 'react';

class OrderSummary extends Component {
    render() {
        console.log("Checkout",this.props.location.state.detail)
        return (
            <div>
                <h2>Order Summary</h2>
                <p>Your order has been suuceessfully place. Your Order id is {this.props.location.state.detail.id}</p>
            </div>
        );
    }
}

export default OrderSummary;