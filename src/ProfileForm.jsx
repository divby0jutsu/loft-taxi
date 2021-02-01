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
import { addBankCard } from "./api";
import InputMask from "react-input-mask";

//import Autocomplete from "@material-ui/lab/Autocomplete";

export const ProfileForm = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const cardinfo = {
    cardNumber: "2000 0000 0000 0000",
    expiryDate: "01/22",
    cardName: "TEST",
    cvc: "910",
    token: "AUTH_TOKEN",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, number, expiry, cvc });
    const success = await addBankCard(cardinfo);
    console.log(success);
  };

  return (
    <Grid container direction="column" alignItems="center" xs={12}>
      <Typography variant="h4" component="h1" style={{ textAlign: "center" }}>
        Профиль
      </Typography>
      <p style={{ textAlign: "center" }}>Введите платежные данные</p>

      <form data-testid="profileForm" onSubmit={handleSubmit}>
        <Grid container wrap="nowrap" xs={12}>
          <Grid item container direction="column" xs={12} s={5}>
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
          <Grid container item direction="column" xs={12} s={5}>
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Coxранить
        </Button>
      </form>
    </Grid>
  );
};

//export default connect(null, { authenticate })(Account);
