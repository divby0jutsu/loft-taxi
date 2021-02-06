import { STORECARD } from "../actions";

const initialState = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
  token: "AUTH_TOKEN",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORECARD:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
