import { Nav } from "./Nav";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

describe("Nav", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Router>
        <Nav />
      </Router>
    );
    expect(getByText("Карта")).toBeTruthy();
    expect(getByText("Профиль")).toBeTruthy();
    expect(getByText("Выйти")).toBeTruthy();
  });
});
