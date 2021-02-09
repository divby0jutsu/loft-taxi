import { authReducer } from "./authReducer";
import { login, logout } from "./../actions";

describe("authReducer", () => {
  describe("action = LOGIN", () => {
    it("returns isLoggedIn = true", () => {
      expect(authReducer({}, login())).toEqual({ isLoggedIn: true });
    });
  });
  describe("action = LOGOUT", () => {
    it("returns isLoggedIn = false", () => {
      expect(authReducer({}, logout())).toEqual({ isLoggedIn: false });
    });
  });
});
