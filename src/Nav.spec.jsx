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
    expect(getByText("Map")).toBeTruthy();
    expect(getByText("Accout")).toBeTruthy();
    expect(getByText("Log Out")).toBeTruthy();
  });
});
