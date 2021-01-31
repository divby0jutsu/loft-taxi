import Welcome from "./Welcome";
import { Login } from "./Login";
import { Register } from "./Register";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

describe("Welcome page", () => {
  it("renders login page when props.renderPage=login", () => {
    const { getByTestId } = render(
      <Router>
        <Welcome renderPage="login" />
      </Router>
    );
    expect(getByTestId("loginForm")).toBeTruthy;
  });

  it("renders register page when props.renderPage=register", () => {
    const { getByTestId } = render(
      <Router>
        <Welcome renderPage="register" />
      </Router>
    );

    expect(getByTestId("registerForm")).toBeTruthy;
  });
});
