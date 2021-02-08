import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "../components/Welcome/Welcome";
import { Home } from "../components/Home/Home";
import PrivateRoute from "./PrivateRoute";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/map" />} />
      <Route path="/signin">
        <Welcome renderPage="login" />
      </Route>
      <Route path="/signup">
        <Welcome renderPage="register" />
      </Route>
      <PrivateRoute path="/map">
        <Home renderPage="map" />
      </PrivateRoute>
      <PrivateRoute path="/account">
        <Home renderPage="account" />
      </PrivateRoute>
    </Switch>
  );
};
