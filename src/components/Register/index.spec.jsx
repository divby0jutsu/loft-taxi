import Register from ".";
import { render, fireEvent, act } from "@testing-library/react";
import { TestWrapper } from "../../testWrapper";

describe("Register", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <TestWrapper>
        <Register />
      </TestWrapper>
    );
    expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
    expect(getByLabelText("First name*")).toHaveAttribute("name", "name");
    expect(getByLabelText("Last name*")).toHaveAttribute("name", "surname");
    expect(getByLabelText("Password*")).toHaveAttribute("name", "password");
  });

  it("dispatches register function with user info", async () => {
    const mockDispatch = jest.fn();
    const { getByLabelText, getByTestId } = render(
      <TestWrapper loginState={false}>
        <Register useDispatchHook={() => mockDispatch} />
      </TestWrapper>
    );

    const emailInput = getByLabelText("Email*");
    const nameInput = getByLabelText("First name*");
    const lastNameInput = getByLabelText("Last name*");
    const pswInput = getByLabelText("Password*");
    const submitButton = getByTestId("registerSubmit");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(nameInput, { target: { value: "testname" } });
      fireEvent.change(lastNameInput, { target: { value: "testsurname" } });
      fireEvent.change(pswInput, { target: { value: "testpassword" } });
      fireEvent.click(submitButton);
    });
    expect(mockDispatch).toBeCalledWith({
      type: "REGISTER",
      payload: {
        email: "test@test.com",
        name: "testname",
        surname: "testsurname",
        password: "testpassword",
      },
    });
  });
});
