import { Account } from "./";
import { render } from "@testing-library/react";
import { TestWrapper } from "../../testWrapper";

describe("Account", () => {
  it("renders correctly", () => {
    const { container } = render(
      <TestWrapper loginState={true}>
        <Account />
      </TestWrapper>
    );
    expect(container.innerHTML).toMatch("Account");
  });
});
