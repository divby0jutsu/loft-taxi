import { routeReducer } from "./routeReducer";
import { storeRoute } from "./../actions";

describe("profileReducer", () => {
  describe("action = STOREROUTE", () => {
    const route = [
      [31.1234, 51.6456],
      [31.1234, 51.6456],
    ];
    it("returns cardinfo object", () => {
      expect(routeReducer({}, storeRoute(route))).toEqual(route);
    });
  });
});
