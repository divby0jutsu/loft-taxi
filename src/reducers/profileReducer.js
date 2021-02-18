import { STORECARD, SAVECARD_ERROR } from "../actions";

const initialState = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
  token: "AUTH_TOKEN",
  error: " ",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORECARD:
      return {
        ...action.payload,
      };
    case SAVECARD_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
