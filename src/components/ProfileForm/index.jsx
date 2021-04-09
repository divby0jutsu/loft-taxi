import React, { useState } from "react";
import { Typography, FormLabel, Grid } from "@material-ui/core";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { connect } from "react-redux";
import { saveCard } from "../../actions";
import { cardInfoSelector } from "../../reducers/rootReducer";
import { useForm, Controller } from "react-hook-form";
import { Form } from "../Form";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import NumberFormat from "react-number-format";
import { Error } from "../Error";
import { Notification } from "../Notification";
import Hidden from "@material-ui/core/Hidden";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  // name: yup
  //   .string()
  //   .matches(/^[A-Za-z ]*$/, "Введите корректное имя")
  //   .required("Введите имя на карте"),
  // number: yup.string().required("Введите номер карты"),
  // expiry: yup.string().required("Введите срок действия карты"),
  // cvc: yup.string().required("Введите cvc-код"),
});

const ProfileForm = (props) => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [name, setName] = useState(props.storedCard.cardName);
  const [number, setNumber] = useState(props.storedCard.cardNumber);
  const [expiry, setExpiry] = useState(props.storedCard.expiryDate);
  const [cvc, setCvc] = useState(props.storedCard.cvc);
  const [focus, setFocus] = useState("");

  const cardinfo = {
    cardNumber: number,
    expiryDate: expiry,
    cardName: name,
    cvc: cvc,
    token: props.token,
  };

  const onSubmit = (data) => {
    props.saveCard(cardinfo);
  };

  const limit = (val, max) => {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = "01";
      } else if (val > max) {
        val = max;
      }
    }
    return val;
  };

  const message = useSelector(cardInfoSelector);

  const cardExpiry = (val) => {
    let month = limit(val.substring(0, 2), "12");
    let year = val.substring(2, 4);

    return month + (year.length ? "/" + year : "");
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      xs={12}
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
        Payment method
      </Typography>
      <p style={{ textAlign: "center" }}>Add payment details</p>
      <Notification>
        {message.success === "saving"
          ? "Saving information..."
          : message.success
          ? "Your payment information have been saved"
          : "Something went wrong"}
      </Notification>
      <Form data-testid="profileForm" onSubmit={handleSubmit(onSubmit)}>
        <Grid container item wrap="nowrap" xs={12}>
          <Grid item container direction="column" xs={12} s={5}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Name on the card"
              value={name}
              ref={register}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              error={!!errors.name}
              helperText={errors?.name?.message}
              inputProps={{ "data-testid": "cardName" }}
            />
            <FormLabel htmlFor="number">Card number</FormLabel>
            <Controller
              as={
                <NumberFormat
                  format="#### #### #### ####"
                  customInput={Input}
                  onValueChange={(v) => setNumber(v.value)}
                  ref={register}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              }
              control={control}
              type="tel"
              name="number"
              placeholder="**** **** **** ****"
              defaultValue={number}
              error={!!errors.number}
              helperText={errors?.number?.message}
            />
            <Grid container item wrap="nowrap">
              <Grid container item direction="column">
                <FormLabel htmlFor="expiry">MM/YY</FormLabel>
                <Controller
                  as={
                    <NumberFormat
                      format={cardExpiry}
                      customInput={Input}
                      onValueChange={(v) => setExpiry(v.value)}
                      onFocus={(e) => setFocus(e.target.name)}
                      ref={register}
                    />
                  }
                  control={control}
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  defaultValue={expiry}
                  error={!!errors.expiry}
                  helperText={errors?.expiry?.message}
                />
              </Grid>
              <Grid container item direction="column">
                <FormLabel htmlFor="cvc">CVC</FormLabel>
                <Controller
                  as={
                    <NumberFormat
                      format="###"
                      customInput={Input}
                      onFocus={(e) => setFocus(e.target.name)}
                      onValueChange={(v) => setCvc(v.value)}
                      ref={register}
                    />
                  }
                  control={control}
                  type="tel"
                  name="cvc"
                  value={cvc}
                  placeholder="CVC"
                  defaultValue={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  error={!!errors.cvc}
                  helperText={errors?.cvc?.message}
                />
              </Grid>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid
              container
              item
              direction="column"
              xs={12}
              s={5}
              justify="center"
              style={{ paddingLeft: "2rem" }}
            >
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
              />
            </Grid>
          </Hidden>
        </Grid>
        <Grid item container justify="center">
          <PrimaryButton data-testid="profileSubmit">Save</PrimaryButton>
        </Grid>
      </Form>
    </Grid>
  );
};

export default connect(cardInfoSelector, { saveCard })(ProfileForm);
