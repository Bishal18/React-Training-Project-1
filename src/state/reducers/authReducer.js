import * as ActionTypes from '../actionTypes';

const INITIAL_STATE = {
    authenticated: false,
    user: null
}
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case ActionTypes.LOGOUT:
        return { ...state, authenticated: false, user: null }
    case ActionTypes.LOGIN:
        return { ...state, authenticated: true, user: action.payload.user }
    default:
        return state;
        }
}
export default authReducer; 