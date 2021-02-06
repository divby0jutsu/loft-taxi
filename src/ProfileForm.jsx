import React, { useState } from "react";
import {
  Button,
  Typography,
  FormLabel,
  TextField,
  Grid,
} from "@material-ui/core";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import InputMask from "react-input-mask";
import { connect } from "react-redux";
import { saveCard } from "./actions";

//import Autocomplete from "@material-ui/lab/Autocomplete";

const ProfileForm = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const cardinfo = {
    cardNumber: number,
    expiryDate: expiry,
    cardName: name,
    cvc: cvc,
    token: "AUTH_TOKEN",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, number, expiry, cvc });
    props.saveCard(cardinfo);
  };

  return (
    <Grid
      container
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
        Профиль
      </Typography>
      <p style={{ textAlign: "center" }}>Введите платежные данные</p>

      <form data-testid="profileForm" onSubmit={handleSubmit}>
        <Grid container wrap="nowrap" xs={12}>
          <Grid
            item
            container
            direction="column"
            xs={12}
            s={5}
            style={{ marginRight: "2rem" }}
          >
            <FormLabel htmlFor="name">Имя владельца</FormLabel>
            <TextField
              type="text"
              name="name"
              placeholder="Имя на карте"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <FormLabel htmlFor="number">Номер карты</FormLabel>
            <InputMask
              mask="9999 9999 9999 9999"
              name="number"
              disableUnderline
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              value={number}
            >
              <TextField type="tel" placeholder="**** **** **** ****" />
            </InputMask>
            <Grid container item wrap="nowrap">
              <Grid
                container
                item
                direction="column"
                style={{ marginRight: "2rem" }}
              >
                <FormLabel htmlFor="cvc">MM/YY</FormLabel>
                <InputMask
                  mask="99/99"
                  name="number"
                  maskChar=" "
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  value={expiry}
                >
                  <TextField type="text" name="expiry" placeholder="MM/YY" />
                </InputMask>
              </Grid>
              <Grid container item direction="column">
                <FormLabel htmlFor="cvc">CVC</FormLabel>
                <TextField
                  type="tel"
                  name="cvc"
                  value={cvc}
                  placeholder="CVC"
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="column"
            xs={12}
            s={5}
            justify="center"
          >
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </Grid>
        </Grid>
        <Grid item container justify="center">
          <Button variant="contained" color="primary" type="submit" mx="auto">
            Coxранить
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default connect(null, { saveCard })(ProfileForm);
