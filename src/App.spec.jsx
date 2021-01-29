import React from "react";
import { Router } from "react-router-dom";
import { render, getByText, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { mount } from "enzyme";
import { AuthContext } from "./Authentication";
import { Login } from "./Login";
import App from "./App";

jest.mock("./Map", () => () => <div>Map content</div>);
jest.mock("./Account", () => ({ Account: () => <div>Profile content</div> }));

const AppWrapper = ({ path, context = {} }) => {
  const history = createMemoryHistory();
  if (path) {
    history.push(path);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: false, ...context }}>
      <Router history={history}>
        <App />
      </Router>
    </AuthContext.Provider>
  );
};

describe("App", () => {
  it("renders correctly", () => {
    const { getByText } = render(<AppWrapper />);
    expect(getByText("Email")).toBeTruthy();
  });

  it("opens map page after login", () => {
    const { getByText } = render(<AppWrapper context={{ isLoggedIn: true }} />);
    expect(getByText("Map content")).toBeTruthy();
  });

  it("renders Login form when user signed out", () => {
    const wrapper = mount(<AppWrapper context={{ isLoggedIn: false }} />);
    expect(wrapper.contains(<Login />)).toEqual(true);
  });

  describe("when clicked on navigation buttons", () => {
    it("opens profile page", () => {
      const { getByText } = render(
        <AppWrapper path="/map" context={{ isLoggedIn: true }} />
      );
      fireEvent.click(getByText("Профиль"));
      expect(getByText("Profile content")).toBeTruthy();
    });

    it("opens map page", () => {
      const { getByText } = render(
        <AppWrapper path="/account" context={{ isLoggedIn: true }} />
      );
      fireEvent.click(getByText("Карта"));
      expect(getByText("Map content")).toBeTruthy();
    });
  });
});
