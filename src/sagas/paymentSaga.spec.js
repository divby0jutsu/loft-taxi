import { recordSaga } from "./recordSaga";
import { saveCardSaga } from "./paymentSaga";
import { storeCard } from "../actions";
import { addBankCard } from "../api";

jest.mock("../api", () => ({ addBankCard: jest.fn(() => true) }));

describe("paymentSaga", () => {
  describe("#SAVECARD", () => {
    it("saves card info on server", async () => {
      addBankCard.mockImplementation(async () => {
        return { success: true };
      });
      const dispatched = await recordSaga(
        saveCardSaga,
        storeCard({
          cardNumber: "2323 2323 2323 2323",
          expiryDate: "12/23",
          cardName: "TEST",
          cvc: "910",
          token: "AUTH_TOKEN",
        })
      );

      expect(dispatched).toEqual([
        {
          type: "STORECARD",
          payload: {
            cardNumber: "2323 2323 2323 2323",
            expiryDate: "12/23",
            cardName: "TEST",
            cvc: "910",
            token: "AUTH_TOKEN",
          },
        },
      ]);
    });
    it("fails to save card info on server", async () => {
      addBankCard.mockImplementation(async () => {
        return { success: false, error: "error" };
      });
      const dispatched = await recordSaga(
        saveCardSaga,
        storeCard({
          cardNumber: "2323 2323 2323 2323",
          expiryDate: "12/23",
          cardName: "TEST",
          cvc: "910",
          token: "AUTH_TOKEN",
        })
      );
      expect(dispatched).toEqual([
        { type: "SAVECARD_ERROR", payload: "error" },
      ]);
    });
  });
});
