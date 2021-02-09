import Register from "./Register";
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
    expect(getByLabelText("Как вас зовут?*")).toHaveAttribute("name", "name");
    expect(getByLabelText("Придумайте пароль*")).toHaveAttribute(
      "name",
      "password"
    );
  });
});
