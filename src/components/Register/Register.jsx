import React from "react";
import { Button, Typography, FormLabel, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions";

const Register = (props) => {
  const [email, setEmail] = React.useState();
  const [name, setName] = React.useState();
  const [surname, setSurname] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, name, surname });
    props.register({ email, password, name, surname });
  };

  return (
    <form
      data-testid="registerForm"
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel htmlFor="name">Имя*</FormLabel>
      <TextField
        type="text"
        name="name"
        id="name"
        placeholder="Петр"
        onChange={(e) => setName(e.target.value)}
      />
      <FormLabel htmlFor="surname">Фамилия*</FormLabel>
      <TextField
        type="text"
        name="surname"
        id="surname"
        placeholder="Иванов"
        onChange={(e) => setSurname(e.target.value)}
      />
      <FormLabel htmlFor="password">Придумайте пароль*</FormLabel>
      <TextField
        type="password"
        name="password"
        id="password"
        placeholder="*************"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
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

export default connect(null, { register })(Register);
