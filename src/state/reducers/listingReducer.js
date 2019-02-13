/* Bishal */
import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = {
  loading: false,
  productList: []
};

const listingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.INIT_PRODUCTS:
      return { ...state, productList: action.payload.value };
    case ActionTypes.LOADING_PRODUCTS:
      return { ...state, loading: action.payload.value };
    default:
      return state;
  }
};

export default listingReducer;
