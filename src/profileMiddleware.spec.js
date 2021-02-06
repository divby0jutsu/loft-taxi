import { profileMiddleware } from "./profileMiddleware";
import { saveCard } from "./actions";
import { addBankCard } from "./api";

jest.mock("./api", () => ({ addBankCard: jest.fn(() => true) }));

describe("profileMiddleware", () => {
  afterAll(jest.clearAllMocks);
  describe("SAVECARD", () => {
    const card = {
      cardNumber: "2000 0000 0000 0000",
      expiryDate: "05/21",
      cardName: "TEST",
      cvc: "910",
      token: "AUTH_TOKEN",
    };
    it("attempt to save through api", async () => {
      addBankCard.mockImplementation(async () => {
        return { success: true };
      });
      const dispatch = jest.fn();

      await profileMiddleware({ dispatch })()(saveCard(card));

      expect(addBankCard).toBeCalledWith(card);
      expect(dispatch).toBeCalled();
    });
    it("successfully saved through api", async () => {
      addBankCard.mockImplementation(async () => {
        return { success: true };
      });
      const dispatch = jest.fn();

      await profileMiddleware({ dispatch })()(saveCard(card));
      expect(dispatch).toBeCalled();
    });
    it("failed to save with wrong cardinfo", async () => {
      addBankCard.mockImplementation(() => {
        return { success: false };
      });
      const dispatch = jest.fn();

      await profileMiddleware({ dispatch })()(saveCard(card));
      expect(dispatch).not.toBeCalled();
    });
  });
});
