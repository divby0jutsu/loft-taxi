import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const GoToProfile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        margin: "20px",
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
        Заполните платежные данные
      </Typography>
      <p>Укажите информацию о банковской карте, чтобы сделать заказ.</p>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/account"
      >
        Перейти в профиль
      </Button>
    </div>
  );
};
