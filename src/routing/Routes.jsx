import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "../components/Welcome/Welcome";
import { Header } from "../components/Header/Header";
import Map from "../components/Map/Map";
import { Account } from "../components/Account/Account";
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
        <Header />
        <Map />
      </PrivateRoute>
      <PrivateRoute path="/account">
        <Header />
        <Account />
      </PrivateRoute>
    </Switch>
  );
};
