import { authMiddleware } from "./authMiddleware";
import { authenticate } from "../actions";
import { serverLogin } from "../api";

jest.mock("../api", () => ({ serverLogin: jest.fn(() => true) }));

describe("authMiddleware", () => {
  afterAll(jest.clearAllMocks);
  describe("AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      serverLogin.mockImplementation(async () => {
        return { success: true };
      });
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        authenticate({ email: "testlogin", password: "testpassword" })
      );

      expect(serverLogin).toBeCalledWith({
        email: "testlogin",
        password: "testpassword",
      });
    });
  });
  describe("with wrong credentials", () => {
    it("authenticates through api", async () => {
      serverLogin.mockImplementation(() => {
        return { success: false };
      });
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        authenticate("testlogin", "testpassword")
      );
      expect(dispatch).not.toBeCalled();
    });
  });
});
