import { Register} from "./Register";
import { render } from "@testing-library/react";

describe("Login", () => {
  it("renders correctly", () => {
    const {getByLabelText} = render(<Register/>)
    expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
    expect(getByLabelText("Как вас зовут?*")).toHaveAttribute("name", "name");
    expect(getByLabelText("Придумайте пароль*")).toHaveAttribute("name", "password");
  })
})