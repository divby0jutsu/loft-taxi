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
      const card = action.payload;
      return {
        cardNumber: card.cardNumber,
        expiryDate: card.expiryDate,
        cardName: card.cardName,
        cvc: card.cvc,
      };
    default:
      return state;
  }
};
