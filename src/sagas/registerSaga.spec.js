import { recordSaga } from "./recordSaga";
import { registrationSaga } from "./registerSaga";
import { register } from "../actions";
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
        register({
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
        return { success: false };
      });
      const dispatched = await recordSaga(
        registrationSaga,
        register({
          email: "testlogin",
          password: "testpassword",
          name: "testname",
          surname: "testsurname",
        })
      );

      expect(dispatched).toEqual([]);
    });
  });
});
