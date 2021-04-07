import { authReducer } from "./authReducer";
import { login, loginError, logout } from "./../actions";

describe("authReducer", () => {
  describe("action = LOGIN", () => {
    it("returns isLoggedIn = true", () => {
      expect(authReducer({}, login())).toEqual({
        isLoggedIn: true,
        error: " ",
      });
    });
  });
  describe("action = LOGIN_ERROR", () => {
    it("returns error", () => {
      expect(authReducer({}, loginError("error"))).toEqual({ error: "error" });
    });
  });
  describe("action = LOGOUT", () => {
    it("returns isLoggedIn = false", () => {
      expect(authReducer({}, logout())).toEqual({ isLoggedIn: false });
    });
  });
});
