import { STORECARD } from "../actions";

const initialState = {
  storedCard: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORECARD:
      console.log(action.payload);
      return { storedCard: { ...action.payload } };
    default:
      return state;
  }
};
