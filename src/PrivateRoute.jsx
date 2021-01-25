import React from "react";
import {
  BrowserRouter as 
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from './Authentication';

const PrivateRoute = ({ children, ...props }) => {
  const {isLoggedIn} = React.useContext(AuthContext);
  return isLoggedIn === true ? (<Route {...props}>{children}</Route>) : (<Redirect to="/signin" />);
};

export default PrivateRoute;