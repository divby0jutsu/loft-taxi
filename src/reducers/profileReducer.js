import { STORECARD, SAVECARD_ERROR, SAVECARD_REQUESTING } from "../actions";

const initialState = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
  token: "AUTH_TOKEN",
  error: " ",
  success: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORECARD:
      return {
        ...action.payload,
      };
    case SAVECARD_REQUESTING:
      return {
        success: "saving",
      };
    case SAVECARD_ERROR:
      return {
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
