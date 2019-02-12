
import React, { Component } from 'react';
import {connect} from 'react-redux';
import config from "../configs/config";
import AddToCart from '../containers/AddToCart';

let apiConfig = config.apiSettings;

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        product: ''
    }
    componentDidMount() {
        fetch(`${apiConfig.baseURL}${apiConfig.productRoute}/${this.props.match.params.productId}`)
        .then(response => response.json())
        .then(product => {
            this.setState({product});
        })
    }
    render() {
        return (
            <div >
               <b><p>{this.state.product.name}</p></b> 
                <img src={this.state.product.imageUrl}  />
                <p><label><b>Short shortDescription:</b> </label>{this.state.product.shortDescription}</p>
                <p><label><b>long Description:</b> </label>  {this.state.product.longDescription}</p>
                <p><label><b>price: </b></label> {this.state.product.price}</p>

              <AddToCart productAdded={this.state.product} />

        </div>
        );
    }
}

export default connect(state=>{
    return{
        proID:state.listing.proID
    }
    })(ProductDetail)


