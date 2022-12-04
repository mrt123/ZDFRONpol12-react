import { daysAgo, daysAgoPretty } from "../dates";

jest.useFakeTimers().setSystemTime(new Date("2022/12/03"));

describe("dates.ts", () => {
  describe("daysAgo", () => {
    it("1 day ago is returned", () => {
      const dateToTest = new Date("2022/12/02");
      const daysAgoResult = daysAgo(dateToTest);
      expect(daysAgoResult).toEqual(1);
    });

    it("5 days ago is returned", () => {
      const dateToTest = new Date("2022/11/28");
      const daysAgoResult = daysAgo(dateToTest);
      expect(daysAgoResult).toEqual(5);
    });
  });

  describe("daysAgoPretty", () => {
    it("when date is defined (checking battle of Grunwald date)", () => {
      const battleOfGrunwald = new Date("1410/07/15");
      const returnedText = daysAgoPretty(battleOfGrunwald);
      expect(returnedText).toEqual("223670 days ago");
    });

    it("when date is undefined ", () => {
      const returnedText = daysAgoPretty();
      expect(returnedText).toEqual("unknown");
    });
  });
});
