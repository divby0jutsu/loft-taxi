import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { cardNumberSelector } from "../../reducers/rootReducer";
import OrderForm from "./OrderForm";
import { GoToProfile } from "./GoToProfile";

const OrderTaxiForm = (props) => {
  const switchForm = () => {
    return props.cardNumber.length > 0 ? <OrderForm /> : <GoToProfile />;
  };

  return (
    <Grid
      item
      container
      direction="column"
      justify="flex-start"
      xs={12}
      sm={5}
      style={{ padding: "2rem" }}
    >
      <Paper
        elevation={5}
        style={{
          display: "flex",
          justifyContent: "center",
          zIndex: "1200",
          borderRadius: "10px",
        }}
      >
        {switchForm()}
      </Paper>
    </Grid>
  );
};

export default connect(cardNumberSelector)(OrderTaxiForm);
