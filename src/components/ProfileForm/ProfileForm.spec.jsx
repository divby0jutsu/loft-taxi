import ProfileForm from "./ProfileForm";
import { render } from "@testing-library/react";
import { TestWrapper } from "../../testWrapper";

describe("ProfileForm", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <TestWrapper>
        <ProfileForm />
      </TestWrapper>
    );
    expect(getByTestId("profileForm")).toBeTruthy;
  });
});
