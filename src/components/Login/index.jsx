import React from "react";
import { Button, Typography, FormLabel } from "@material-ui/core";
import { Link } from "react-router-dom";
import { authenticate } from "../../actions";
import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { yupResolver } from "@hookform/resolvers";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";
import * as yup from "yup";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Введите email"),
  password: yup.string().required("Введите пароль"),
});

const Login = ({ useDispatchHook = useDispatch }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(authenticate({ email: data.email, password: data.password }));
  };

  return (
    <Form
      data-testid="loginForm"
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography variant="h4" component="h1" style={{ textAlign: "center" }}>
        Войти
      </Typography>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="mail@mail.ru"
        ref={register}
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
      <FormLabel htmlFor="password">Пароль</FormLabel>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="*************"
        ref={register}
        error={!!errors.password}
        helperText={errors?.password?.message}
      />
      <p style={{ textAlign: "right" }}>Забыли пароль?</p>
      <PrimaryButton data-testid="loginSubmit">Войти</PrimaryButton>
      <p style={{ textAlign: "center" }}>
        Новый пользователь?{" "}
        <Button variant="text" color="primary" component={Link} to="/signup">
          Регистрация
        </Button>
      </p>
    </Form>
  );
};

export default Login;
