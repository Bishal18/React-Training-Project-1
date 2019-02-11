import * as actions from "./actionTypes";
import config from "../configs/config";
import * as filters from "../configs/filterScenarios";

let apiConfig = config.apiSettings;

export const initProducts = value => ({
  type: actions.INIT_PRODUCTS,
  payload: { value }
});

export const loadingProducts = value => ({
  type: actions.LOADING_PRODUCTS,
  payload: { value }
});

export const addToCart = value => ({
  type: actions.ADD_TO_CART,
  payload: { value }
});

export function fetchAllProducts(filterSettings) {
  let { type, params } = filterSettings,
    queryString;
  switch (type) {
    case filters.BESTSELLER:
      queryString = `?_sort=views&_order=desc&_limit=4`;
      break;
    case filters.SEARCHANDFILTER:
      queryString = `?`  
      params.map(param => queryString +=`${param.field}=${param.value}&`);
      break;
    default:
      queryString = ``;
  }
  return function asyncCode(dispatch, getState) {
    dispatch(loadingProducts(true));
    fetch(`${apiConfig.baseURL}${apiConfig.productRoute}${queryString}`)
      .then(response => response.json())
      .then(Products => {
        const action = initProducts(Products);
        dispatch(action);
        dispatch(loadingProducts(false));
      });
  };
}
