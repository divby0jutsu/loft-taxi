import React from "react";
//import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { mount } from "enzyme";
import { Login } from "./Login";
//import { Provider } from "react-redux";
import App from "./App";
import { TestWrapper } from "./testWrapper";

jest.mock("./Map", () => () => <div>Map content</div>);
jest.mock("./Account", () => ({ Account: () => <div>Profile content</div> }));

// const AppWrapper = ({ path, loginState = false }) => {
//   const history = createMemoryHistory();
//   if (path) {
//     history.push(path);
//   }

//   const authState = { auth: { isLoggedIn: loginState } };

//   const mockStore = {
//     getState: () => authState,
//     subscribe: () => {},
//     dispatch: () => {},
//   };

//   return (
//     <Provider store={mockStore}>
//       <Router history={history}>
//         <App />
//       </Router>
//     </Provider>
//   );
// };

describe("App", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <TestWrapper loginState={false}>
        <App />
      </TestWrapper>
    );
    expect(getByText("Email")).toBeTruthy();
  });

  it("opens map page after login", () => {
    const { getByText } = render(
      <TestWrapper loginState={true}>
        <App />
      </TestWrapper>
    );
    expect(getByText("Map content")).toBeTruthy();
  });

  describe("when clicked on navigation buttons", () => {
    it("opens profile page", () => {
      const { getByText } = render(
        <TestWrapper path="/map" loginState={true}>
          <App />
        </TestWrapper>
      );
      fireEvent.click(getByText("Профиль"));
      expect(getByText("Profile content")).toBeTruthy();
    });

    it("opens map page", () => {
      const { getByText } = render(
        <TestWrapper path="/account" loginState={true}>
          <App />
        </TestWrapper>
      );
      fireEvent.click(getByText("Карта"));
      expect(getByText("Map content")).toBeTruthy();
    });
  });
});
