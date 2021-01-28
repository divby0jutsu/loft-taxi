import { Register} from "./Register";
import { render } from "@testing-library/react";
import { MemoryRouter as Router} from "react-router-dom";

describe("Login", () => {
  it("renders correctly", () => {
    const {getByLabelText} = render(<Router><Register/></Router>)
    expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
    expect(getByLabelText("Как вас зовут?*")).toHaveAttribute("name", "name");
    expect(getByLabelText("Придумайте пароль*")).toHaveAttribute("name", "password");
  })
})