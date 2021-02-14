import { recordSaga } from "./recordSaga";
import { authenticateSaga } from "./authSaga";
import { authenticate } from "../actions";
import { serverLogin } from "../api";

jest.mock("../api", () => ({ serverLogin: jest.fn(() => true) }));

describe("authSaga", () => {
  describe("#AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      serverLogin.mockImplementation(async () => {
        return { success: true };
      });
      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate({ email: "testlogin", password: "testpassword" })
      );

      expect(dispatched).toEqual([
        {
          type: "LOGIN",
        },
      ]);
    });
    it("fails to authenticate through api", async () => {
      serverLogin.mockImplementation(async () => {
        return { success: false };
      });
      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate({ email: "testlogin", password: "testpassword" })
      );

      expect(dispatched).toEqual([]);
    });
  });
});
