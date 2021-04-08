import { STOREADDRESSES } from "../actions";

const initialState = {
  addresses: [],
};

export const addressListReducer = (state = initialState, action) => {
  if (action.type === STOREADDRESSES) {
    return { ...action.payload };
  }

  return state;
};
