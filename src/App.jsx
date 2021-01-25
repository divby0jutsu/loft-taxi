import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Welcome from "./Welcome";
import { Header } from "./Header";
import Map from "./Map";
import Account from "./Account";
import "./App.css";
import { AuthContext } from "./Authentication";
import PrivateRoute from "./PrivateRoute"

const App = () => {

  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/signin" />} />
            <Route path="/signin">
              <Welcome renderPage="login" />
            </Route>
            <Route path="/signup">
              <Welcome renderPage="register" />
            </Route>              
            <PrivateRoute path="/map">
              <Header />
              <Map/>
            </PrivateRoute>
            <PrivateRoute path="/account">
              <Header />
              <Account/>
            </PrivateRoute>
          </Switch>
        </Router>
      </ThemeProvider>
  );
};

export default App;
