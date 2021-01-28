import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { ReactComponent as Logo } from './logo.svg'
import { Grid } from "@material-ui/core";
import { PropTypes } from 'prop-types';

const Welcome = ({ renderPage}) => {

  function switchForm (page) {
    return page === 'register'? <Register /> : <Login />
  }
  
  return (
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
         {switchForm(renderPage)} 
        </Grid>
      </Grid>
    </Grid>
  );
};

Welcome.propTypes = {
  renderPage: PropTypes.string
};

export default Welcome;