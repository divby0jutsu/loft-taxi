import React from "react";
import { Header } from "../Header/Header";
import { Account } from "../Account/Account";
import { Grid } from "@material-ui/core";
import { PropTypes } from "prop-types";
import OrderTaxiForm from "../OrderForm/OrderTaxiForm";
import Map from "../Map/Map";

export const Home = ({ ...props }) => {
  function switchForm(page) {
    return page === "map" ? (
      <React.Fragment>
        <OrderTaxiForm />
        <Map />
      </React.Fragment>
    ) : (
      <Account />
    );
  }

  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item style={{ width: "100vw", height: "108px" }}>
        <Header />
      </Grid>
      <Grid item style={{ display: "flex", flexGrow: "1" }}>
        {switchForm(props.renderPage)}
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  renderPage: PropTypes.string,
};
