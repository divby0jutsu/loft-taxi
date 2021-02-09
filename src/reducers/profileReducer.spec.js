import { profileReducer } from "./profileReducer";
import { storeCard } from "./../actions";

describe("profileReducer", () => {
  describe("action = STORECARD", () => {
    const card = {
      cardNumber: "2000 0000 0000 0000",
      expiryDate: "05/21",
      cardName: "TEST",
      cvc: "910",
    };
    it("returns cardinfo object", () => {
      expect(profileReducer({}, storeCard(card))).toEqual(card);
    });
  });
});
