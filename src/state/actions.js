import * as actions from "./actionTypes";
import config from "../configs/config";
import * as filters from "../configs/filterScenarios";
import axios from 'axios'; 

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
export const removeFromCart = (productId) => ({
  type: actions.REMOVE_FROM_CART,
  payload: { productId }
})
export const buyNow = (value) => ({
  type: actions.BUY_NOW,
  payload: { value }
})

export const removeProduct = value => ({
  type: actions.REMOVE_FROM_CART,
  payload: { value }
});


export const login = (user) => ({
  type: actions.LOGIN,
  payload: { user }
})

export const logout = () => ({
  type: actions.LOGOUT
}) 

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

export const autheticateUser = (username, password, callback) => (dispatch, getState) => {
    var apiUrl = `${apiConfig.baseURL}${apiConfig.usersRoute}?username=${username}&password=${password}`;
    return axios.get(apiUrl)
    .then(response => {
    if (response.data && response.data.length > 0) {
      dispatch(login(response.data[0]));
      callback(true);
    }
    else {
      callback(false);
    }
    })
      .catch(function (error) {
      console.log("Error in authenticateUser api: " + error);
    })
}