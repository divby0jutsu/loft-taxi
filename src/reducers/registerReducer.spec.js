import { registerReducer } from "./registerReducer";
import { registerUser } from "./../actions";

describe("profileReducer", () => {
  describe("action = REGISTER", () => {
    const user = {
      email: "test@test.com",
      password: "test",
      name: "test",
      surname: "test",
    };
    it("returns cardinfo object", () => {
      expect(registerReducer({}, registerUser(user))).toEqual(user);
    });
  });
});
