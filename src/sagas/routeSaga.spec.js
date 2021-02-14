import { recordSaga } from "./recordSaga";
import { getRouteSaga } from "./routeSaga";
import { storeRoute } from "../actions";
import { getMapRoute } from "../api";

jest.mock("../api", () => ({ getMapRoute: jest.fn(() => true) }));

describe("routeSaga", () => {
  describe("#STOREROUTE", () => {
    it("saves route coordinates", async () => {
      getMapRoute.mockImplementation(async () => {
        return [["testaddress"]];
      });
      const dispatched = await recordSaga(
        getRouteSaga,
        storeRoute([["testaddress"]])
      );

      expect(dispatched).toEqual([
        {
          type: "STOREROUTE",
          payload: [["testaddress"]],
        },
      ]);
    });
  });
});
