import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./Login", () => ({ Login: () => <div>Login content</div> }));
jest.mock("./Account", () => ({ Account: () => <div>Account content</div> }));
jest.mock("./Map", () => ({ Map: () => <div>Map content</div> }));

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
      fireEvent.click(getByText('Карта'));
      expect(container.innerHTML).toMatch("Map content");
    });
  });
});