import { recordSaga } from "./recordSaga";
import { addressesSaga } from "./addressListSaga";
import { storeAddresses } from "../actions";
import { getAddressList } from "../api";

jest.mock("../api", () => ({ getAddressList: jest.fn(() => true) }));

describe("addressListSaga", () => {
  describe("#STOREADDRESSES", () => {
    it("saves address list", async () => {
      getAddressList.mockImplementation(async () => {
        return { addresses: "testaddress" };
      });
      const dispatched = await recordSaga(
        addressesSaga,
        storeAddresses({
          addresses: "testaddress",
        })
      );

      expect(dispatched).toEqual([
        {
          type: "STOREADDRESSES",
          payload: {
            addresses: "testaddress",
          },
        },
      ]);
    });
    it("fails to save address list", async () => {
      getAddressList.mockImplementation(async () => {
        return {};
      });
      const dispatched = await recordSaga(
        addressesSaga,
        storeAddresses({
          addresses: "testaddress",
        })
      );

      expect(dispatched).toEqual([]);
    });
  });
});
