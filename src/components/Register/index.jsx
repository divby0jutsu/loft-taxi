import React from "react";
import { Button, Typography, FormLabel } from "@material-ui/core";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions";
import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { Error } from "../Error";
import { loginErrorSelector } from "../../reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Enter email address"),
  password: yup.string().required("Enter password"),
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Enter correct first name")
    .required("Enter your first name"),
  surname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Enter correct last name")
    .required("Enter your last name"),
});

const Register = ({ useDispatchHook = useDispatch }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatchHook();

  const onSubmit = (data) => {
    dispatch(
      registerUser({
        email: data.email,
        password: data.password,
        name: data.name,
        surname: data.surname,
      })
    );
  };

  const { error } = useSelector(loginErrorSelector);

  return (
    <Form
      data-testid="registerForm"
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" component="h1" style={{ textAlign: "center" }}>
        Sign Up
      </Typography>
      <Error>{error}</Error>
      <FormLabel htmlFor="email">Email*</FormLabel>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="example@example.com"
        ref={register}
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
      <FormLabel htmlFor="name">First name*</FormLabel>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Alison"
        ref={register}
        error={!!errors.name}
        helperText={errors?.name?.message}
      />
      <FormLabel htmlFor="surname">Last name*</FormLabel>
      <Input
        type="text"
        name="surname"
        id="surname"
        placeholder="Johnson"
        ref={register}
        error={!!errors.surname}
        helperText={errors?.surname?.message}
      />
      <FormLabel htmlFor="password">Password*</FormLabel>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="*************"
        ref={register}
        error={!!errors.password}
        helperText={errors?.password?.message}
      />
      <PrimaryButton data-testid="registerSubmit">Sign Up</PrimaryButton>
      <p style={{ textAlign: "center" }}>
        Already have an account?{" "}
        <Button variant="text" color="primary" component={Link} to="/signin">
          Log In
        </Button>
      </p>
    </Form>
  );
};

export default Register;
