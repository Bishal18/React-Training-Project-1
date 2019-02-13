
//Apoorva
import { connect } from 'react-redux';
import * as actions from '../state/actions';

import Login from '../pages/Login';

const mapStateToProps = (state) => {
return {
        authenticated: state.auth.authenticated,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        checklogin: (username, password) => {
            dispatch(actions.validateUser(username, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 