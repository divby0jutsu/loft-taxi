import React from "react";
import { Button, Typography, FormLabel, TextField } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "./actions";

const Login = (props) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  // const credentials = {
  //   email: "test5@test.com",
  //   password: "000000",
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.authenticate({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography variant="h4" component="h1" style={{ textAlign: "center" }}>
        Войти
      </Typography>
      <FormLabel htmlFor="email">Email</FormLabel>
      <TextField
        type="email"
        name="email"
        id="email"
        placeholder="mail@mail.ru"
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel htmlFor="password">Пароль</FormLabel>
      <TextField
        type="password"
        name="password"
        id="password"
        placeholder="*************"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p style={{ textAlign: "right" }}>Забыли пароль?</p>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Войти
      </Button>
      <p style={{ textAlign: "center" }}>
        Новый пользователь?{" "}
        <Button variant="text" color="primary" component={Link} to="/signup">
          Регистрация
        </Button>
      </p>
    </form>
  );
};

export default connect(null, { authenticate })(Login);
