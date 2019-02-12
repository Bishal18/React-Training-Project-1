import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../state/actions';

class LoginTab extends Component {

  mapDispatchToProps = (dispatch, getState) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


  render() {
   
    var { user } = this.props;
    console.log("check",this.props);
    return (
        user ?
            <React.Fragment >
                <b>Hi, {user.username}</b> 
                 | <button type="button" className="btn btn-primary" onClick={this.props.logout}>Logout</button> 
            </React.Fragment >
            :
            < React.Fragment >
                <NavLink to="/Login">Login</NavLink>
            </React.Fragment >
    );
}
}
// export default LoginTab;

export default connect((state)=>{
  return{
    user:state.auth.user
  }
})(LoginTab)
