import React, { Component } from 'react';
import ProductSection from '../containers/ProductSection';
import FilterSection from '../containers/FilterSection';

class ProductListing extends Component {
    state = {
        filterSettings : {
            type: '',
            params: []
    }}
    render() {
        return (
            <div>
                <FilterSection></FilterSection>
                <ProductSection filterSettings = {this.state.filterSettings}/>
            </div>
        );
    }
}

export default ProductListing;