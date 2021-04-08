import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../PrimaryButton";

export const GoToProfile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        margin: "20px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        style={{
          marginBottom: "0.8rem",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Add payment method
      </Typography>
      <p>Add yout credit or debit card to proceed with order</p>
      <PrimaryButton component={Link} to="/account">
        Go to Account
      </PrimaryButton>
    </div>
  );
};
