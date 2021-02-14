import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { TestWrapper } from "../../testWrapper";

jest.mock("../Map/index.jsx", () => () => <div>Map content</div>);
jest.mock("../Account/index.jsx", () => ({
  Account: () => <div>Profile content</div>,
}));

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
