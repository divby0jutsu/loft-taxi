import { registerReducer } from "./registerReducer";
import { register } from "./../actions";

describe("profileReducer", () => {
  describe("action = REGISTER", () => {
    const user = {
      email: "test@test.com",
      password: "test",
      name: "test",
      surname: "test",
    };
    it("returns cardinfo object", () => {
      expect(registerReducer({}, register(user))).toEqual(user);
    });
  });
});
