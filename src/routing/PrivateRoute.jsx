import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginStateSelector } from "../reducers/rootReducer";

const PrivateRoute = ({ children, ...props }) => {
  return props.isLoggedIn ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to="/signin" />
  );
};

export default connect(loginStateSelector)(PrivateRoute);
