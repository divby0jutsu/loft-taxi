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
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });

  it("dispatches authenticate function with email and password", async () => {
    // const authenticate = jest.fn((email, password) => {
    //   return Promise.resolve({ email, password });
    // });
    const mockDispatch = jest.fn();
    const { getByLabelText, getByTestId } = render(
      <TestWrapper loginState={false}>
        <Login useDispatchHook={() => mockDispatch} />
      </TestWrapper>
    );

    const emailInput = getByLabelText("Email");
    const pswInput = getByLabelText("Пароль");
    const submitButton = getByTestId("loginSubmit");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(pswInput, { target: { value: "testpassword" } });
      //fireEvent.click(submitButton);
      fireEvent.submit(pswInput);
    });
    expect(mockDispatch).toHaveBeenCalled();
  });
});
