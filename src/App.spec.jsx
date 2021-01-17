import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./Login", () => ({ Login: () => <div>Login form</div> }));
jest.mock("./Account", () => ({ Account: () => <div>Account content</div> }));
jest.mock("./LogOut", () => ({ LogOut: () => <div>LogOut content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App />);
      fireEvent.click(getByText('Профиль'))
      expect(container.innerHTML).toMatch("Account content");
      fireEvent.click(getByText('Выйти'));
      expect(container.innerHTML).toMatch("LogOut content");
    });
  });
});