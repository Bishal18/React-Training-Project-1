/* Surya, modified by Bishal */
import * as ActionTypes from '../actionTypes';

const INITIAL_STATE = {
    productData: {}
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, productData: { ...state.productData,...action.payload.value} };
        case ActionTypes.REMOVE_FROM_CART:
            delete state.productData[action.payload.value];
            return { ...state, productData: {...state.productData} }
        default:
            return state;
    }
}

export default cartReducer;