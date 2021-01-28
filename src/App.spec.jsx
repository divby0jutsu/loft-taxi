import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter as Router} from "react-router-dom";

jest.mock("./Login", () => ({ Login: () => <div>Login content</div> }));
jest.mock("./Account", () => ({ Account: () => <div>Account content</div> }));
jest.mock("./Map", () => () => <div>Map content</div>);

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<Router><App /></Router>);
    expect(container.innerHTML).toMatch("Login");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<Router><App /></Router>);
      fireEvent.click(getByText('Карта'));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText('Профиль'))
      expect(container.innerHTML).toMatch("Account content");
      
    });
  });
});