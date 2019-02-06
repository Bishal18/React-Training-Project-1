import React, { Component } from 'react';
import CategoryCard from './global/CategoryCard';
import config from "../configs/config";

let apiConfig = config.apiSettings;

class CategorySection extends Component {
    state = {
        categories: []
    }
    componentDidMount() {
        fetch(`${apiConfig.baseURL}${apiConfig.categoryRoute}`)
        .then(response => response.json())
        .then(categories => {
            this.setState({categories});
        })
    }
    render() {
        return (
            <div className = "row">
                {(this.state.categories).map((categoryData) => (
                     <div className="col col-xl-3 col-sm-4 col-xs-2" key={categoryData.name}>
                        <CategoryCard categoryData = {categoryData}/>
                        <br/>
                    </div>
                ))}
            </div>
        );
    }
}

export default CategorySection;