import * as ActionTypes from '../actionTypes';

const INITIAL_STATE = {
    productData: {}
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, productData: { ...state.productData,...action.payload.value} };
        default:
            return state;
    }
}

export default cartReducer;