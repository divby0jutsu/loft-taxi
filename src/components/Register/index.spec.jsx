import Register from ".";
import { render } from "@testing-library/react";
import { TestWrapper } from "../../testWrapper";

describe("Register", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <TestWrapper>
        <Register />
      </TestWrapper>
    );
    expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
    expect(getByLabelText("Имя*")).toHaveAttribute("name", "name");
    expect(getByLabelText("Фамилия*")).toHaveAttribute("name", "surname");
    expect(getByLabelText("Придумайте пароль*")).toHaveAttribute(
      "name",
      "password"
    );
  });
});
