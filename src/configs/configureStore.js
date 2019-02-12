//Bishal / Surya/Apoorva

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "../state/reducers/authReducer";
import cartReducer from "../state/reducers/cartReducer";
import listingReducer from "../state/reducers/listingReducer";

const configureStore = () => {
  const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    listing: listingReducer
  });
  const initialState = {};
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  return store;
};

export default configureStore;
