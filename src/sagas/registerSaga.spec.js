import { recordSaga } from "./recordSaga";
import { registrationSaga } from "./registerSaga";
import { registerUser } from "../actions";
import { serverRegister } from "../api";

jest.mock("../api", () => ({ serverRegister: jest.fn(() => true) }));

describe("authSaga", () => {
  describe("#AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      serverRegister.mockImplementation(async () => {
        return { success: true };
      });
      const dispatched = await recordSaga(
        registrationSaga,
        registerUser({
          email: "testlogin",
          password: "testpassword",
          name: "testname",
          surname: "testsurname",
        })
      );

      expect(dispatched).toEqual([
        {
          type: "LOGIN",
        },
      ]);
    });
    it("fails to authenticate through api", async () => {
      serverRegister.mockImplementation(async () => {
        return { success: false, error: "error" };
      });
      const dispatched = await recordSaga(
        registrationSaga,
        registerUser({
          email: "testlogin",
          password: "testpassword",
          name: "testname",
          surname: "testsurname",
        })
      );

      expect(dispatched).toEqual([{ type: "LOGIN_ERROR", payload: "error" }]);
    });
  });
});
