import Welcome from "./Welcome";
import { Login } from "./Login";
import { Register } from "./Register";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { TestWrapper } from "./testWrapper";

describe("Welcome page", () => {
  it("renders login page when props.renderPage=login", () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Welcome renderPage="login" />
      </TestWrapper>
    );
    expect(getByTestId("loginForm")).toBeTruthy;
  });

  it("renders register page when props.renderPage=register", () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Welcome renderPage="register" />
      </TestWrapper>
    );

    expect(getByTestId("registerForm")).toBeTruthy;
  });
});
