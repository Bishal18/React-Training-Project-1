import React from "react";

const LoginTab = props => {
  return (
    props.isAuthenticated
        ? `Welcome, ${this.props.username}`
        : `Login`
  );
};

export default LoginTab;
