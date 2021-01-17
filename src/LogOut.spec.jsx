import { LogOut } from "./LogOut";
import { render } from "@testing-library/react";

describe("LogOut", () => {
  it("renders correctly", () => {
    const {container} = render(<LogOut/>);
    expect(container.innerHTML).toMatch("Выйти");
  })
})