import React from "react";
import { Button, Typography, FormLabel, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "./actions";

const Register = (props) => {
  const handleSubmit = (e) => {
    const { email, password } = e.target;
    props.authenticate(email, password);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" component="h1" style={{ textAlign: "center" }}>
        Регистрация
      </Typography>
      <FormLabel htmlFor="email">Email*</FormLabel>
      <TextField
        type="email"
        name="email"
        id="email"
        placeholder="mail@mail.ru"
      />
      <FormLabel htmlFor="name">Как вас зовут?*</FormLabel>
      <TextField
        type="text"
        name="name"
        id="name"
        placeholder="Петр Александрович"
      />
      <FormLabel htmlFor="password">Придумайте пароль*</FormLabel>
      <TextField
        type="password"
        name="password"
        id="password"
        placeholder="*************"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        component={Link}
        to="/map"
        onClick={handleSubmit}
      >
        Зарегистрироваться
      </Button>
      <p style={{ textAlign: "center" }}>
        Уже зарегистрированы?{" "}
        <Button variant="text" color="primary" component={Link} to="/signin">
          Войти
        </Button>
      </p>
    </form>
  );
};

export default connect(null, { authenticate })(Register);
