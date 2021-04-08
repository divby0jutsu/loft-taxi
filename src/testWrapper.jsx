import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";

export const TestWrapper = (props) => {
  const history = createMemoryHistory();
  if (props.path) {
    history.push(props.path);
  }

  const authState = {
    auth: { isLoggedIn: props.loginState },
    profile: {
      cardNumber: "",
      expiryDate: "",
      cardName: "",
      cvc: "",
      token: "AUTH_TOKEN",
    },
  };

  const mockStore = {
    getState: () => authState,
    subscribe: () => {},
    dispatch: () => {},
  };

  return (
    <Provider store={mockStore}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
};
