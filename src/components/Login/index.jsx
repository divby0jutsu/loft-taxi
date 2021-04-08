import React from "react";
import { Button, Typography, FormLabel } from "@material-ui/core";
import { Link } from "react-router-dom";
import { loginErrorSelector } from "../../reducers/rootReducer";
import { authenticate } from "../../actions";
import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { Error } from "../Error";
import { yupResolver } from "@hookform/resolvers";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Enter email address"),
  password: yup.string().required("Enter password"),
});

const Login = ({ useDispatchHook = useDispatch }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatchHook();

  const onSubmit = (data) => {
    dispatch(authenticate({ email: data.email, password: data.password }));
  };

  const { error } = useSelector(loginErrorSelector);

  return (
    <Form
      data-testid="loginForm"
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography variant="h4" component="h1" style={{ textAlign: "center" }}>
        Log In
      </Typography>
      <Error>{error}</Error>
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
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="*************"
        ref={register}
        error={!!errors.password}
        helperText={errors?.password?.message}
      />
      <p style={{ textAlign: "right" }}>Forgot password?</p>
      <PrimaryButton data-testid="loginSubmit">Log In</PrimaryButton>
      <p style={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <Button variant="text" color="primary" component={Link} to="/signup">
          Sign Up
        </Button>
      </p>
    </Form>
  );
};

export default Login;
