import Login from "./";
import { render, fireEvent, act } from "@testing-library/react";
import { TestWrapper } from "../../testWrapper";

describe("Login", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <TestWrapper loginState={false}>
        <Login />
      </TestWrapper>
    );
    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Password")).toHaveAttribute("name", "password");
  });

  it("dispatches authenticate function with email and password", async () => {
    const mockDispatch = jest.fn();
    const { getByLabelText, getByTestId } = render(
      <TestWrapper loginState={false}>
        <Login useDispatchHook={() => mockDispatch} />
      </TestWrapper>
    );

    const emailInput = getByLabelText("Email");
    const pswInput = getByLabelText("Password");
    const submitButton = getByTestId("loginSubmit");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(pswInput, { target: { value: "testpassword" } });
      fireEvent.click(submitButton);
    });
    expect(mockDispatch).toBeCalledWith({
      type: "AUTHENTICATE",
      payload: {
        email: "test@test.com",
        password: "testpassword",
      },
    });
  });
});
