import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import ProductSection from '../containers/ProductSection';
import * as filters from "../configs/filterScenarios";

class Home extends Component {
    filterSettings = {
        type: filters.BESTSELLER,
        params: []
    }
    render() {
        return (
            <div>
               <Carousel/>
               <br/>    
               <h3>BestSellers</h3>
               <ProductSection filterSettings = {this.filterSettings}/> 
            </div>
        );
    }
}

export default Home;