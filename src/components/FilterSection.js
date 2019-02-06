import React, { Component } from "react";
import config from "../configs/config";
import * as filters from "../configs/filterScenarios";
import { DebounceInput } from "react-debounce-input";

let apiConfig = config.apiSettings;

class FilterSection extends Component {
  state = {
    categories: [],
    searchVal: "",
    filterVal: 0
  };

  componentDidMount() {
    fetch(`${apiConfig.baseURL}${apiConfig.categoryRoute}`)
      .then(response => response.json())
      .then(categories => {
        this.setState({ categories });
      });
  }

  onFilterChange = event => {
    switch (event.target.id) {
      case "categorySelect":
        this.setState({ filterVal: parseInt(event.target.value) }, () =>
          this.triggerFilter()
        );
        break;
      case "productSearch":
        this.setState({ searchVal: event.target.value }, () =>
          this.triggerFilter()
        );
        break;
      default: //do nothing
    }
  };

  triggerFilter = () => {
    let filterSettings = {
      type: filters.SEARCHANDFILTER,
      params: []
    };
    if (this.state.searchVal) {
      filterSettings.params.push({
        field: "q",
        value: this.state.searchVal
      });
    }
    if (this.state.filterVal && this.state.filterVal !== 0) {
      filterSettings.params.push({
        field: "categoryId",
        value: this.state.filterVal
      });
    }
    this.props.fetchAllProductData(filterSettings);
  };

  render() {
    let categories = this.state.categories.slice();
    categories.unshift({ id: 0, name: "Any" });
    return (
      <div className="row mx-md-n5">
        <div className="col py-3 px-md-5">
          <label for="productSearch" >Search (by keyword) :</label>
          <DebounceInput
            debounceTimeout={config.debounceValue}
            type="search"
            onChange={this.onFilterChange}
            id="productSearch"
            value={this.state.searchVal}
            className="form-control"
          />
        </div>
        <div className="col py-3 px-md-5">
          <label for="categorySelect" >Filter (by category) :</label>
          <select
            onChange={this.onFilterChange}
            id="categorySelect"
            value={this.state.filterVal}
            className="form-control"
          >
            {categories.map(category => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default FilterSection;
