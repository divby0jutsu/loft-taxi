import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./Welcome";
import { Header } from "./Header";
import Map from "./Map";
import { Account } from "./Account";
import PrivateRoute from "./PrivateRoute";

export const Routes = () => {
  return (<Switch>
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
}