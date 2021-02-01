import Login from "./Login";
import { render } from "@testing-library/react";
import { TestWrapper } from "./testWrapper";

describe("Login", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <TestWrapper loginState={false}>
        <Login />
      </TestWrapper>
    );
    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });
});
