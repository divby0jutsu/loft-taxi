import { Login } from "./Login";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

describe("Login", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <Router>
        <Login />
      </Router>
    );
    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });
});
