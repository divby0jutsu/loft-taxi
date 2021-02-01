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
  };

  const mockStore = {
    getState: () => authState,
    subscribe: () => {},
    dispatch: () => {},
  };

  console.log(props.loginState);

  return (
    <Provider store={mockStore}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
};
