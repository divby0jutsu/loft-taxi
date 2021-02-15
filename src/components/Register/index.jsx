import React from "react";
import { Button, Typography, FormLabel } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions";
import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Введите email"),
  password: yup.string().required("Введите пароль"),
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Введите корректное имя")
    .required("Введите имя"),
  surname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Введите корректную фамилию")
    .required("Введите фамилию"),
});

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    props.registerUser({
      email: data.email,
      password: data.password,
      name: data.name,
      surname: data.surname,
    });
  };

  return (
    <Form
      data-testid="registerForm"
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" component="h1" style={{ textAlign: "center" }}>
        Регистрация
      </Typography>
      <FormLabel htmlFor="email">Email*</FormLabel>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="mail@mail.ru"
        ref={register}
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
      <FormLabel htmlFor="name">Имя*</FormLabel>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Петр"
        ref={register}
        error={!!errors.name}
        helperText={errors?.name?.message}
      />
      <FormLabel htmlFor="surname">Фамилия*</FormLabel>
      <Input
        type="text"
        name="surname"
        id="surname"
        placeholder="Иванов"
        ref={register}
        error={!!errors.surname}
        helperText={errors?.surname?.message}
      />
      <FormLabel htmlFor="password">Придумайте пароль*</FormLabel>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="*************"
        ref={register}
        error={!!errors.password}
        helperText={errors?.password?.message}
      />
      <PrimaryButton>Зарегистрироваться</PrimaryButton>
      <p style={{ textAlign: "center" }}>
        Уже зарегистрированы?{" "}
        <Button variant="text" color="primary" component={Link} to="/signin">
          Войти
        </Button>
      </p>
    </Form>
  );
};

export default connect(null, { registerUser })(Register);
