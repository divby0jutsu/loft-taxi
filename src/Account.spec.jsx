import { Account } from "./Account";
import { render } from "@testing-library/react";

describe("Account", () => {
  it("renders correctly", () => {
    const {container} = render(<Account/>);
    expect(container.innerHTML).toMatch("Профиль");
  })
})