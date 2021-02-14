import { STOREROUTE } from "../actions";

const initialState = {
  route: [],
};

export const routeReducer = (state = initialState, action) => {
  return action.type === STOREROUTE ? [...action.payload] : state;
};
