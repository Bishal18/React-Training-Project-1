import {createStore,
    combineReducers,
    applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const configureStore = () => {
const rootReducer = combineReducers({
})
const initialState = {
}
const store = createStore(rootReducer,initialState,applyMiddleware(thunk));

return store;
}

export default configureStore;