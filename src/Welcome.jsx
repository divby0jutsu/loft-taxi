import React from "react";
import Login from "./Login";
import Register from "./Register";
import { ReactComponent as Logo } from "./logo.svg";
import { Grid } from "@material-ui/core";
import { PropTypes } from "prop-types";
import { loginStateSelector } from "./reducers/rootReducer";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Welcome = ({ ...props }) => {
  function switchForm(page) {
    return page === "register" ? <Register /> : <Login />;
  }

  return props.isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid
        container
        item
        xs={12}
        sm={3}
        style={{ backgroundColor: "black" }}
        justify="center"
        alignItems="center"
      >
        <Logo />
      </Grid>
      <Grid item container xs={12} sm={9} justify="center" alignItems="center">
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
        >
          {switchForm(props.renderPage)}
        </Grid>
      </Grid>
    </Grid>
  );
};

Welcome.propTypes = {
  renderPage: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

export default connect(loginStateSelector)(Welcome);
