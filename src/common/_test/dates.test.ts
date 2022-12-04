import { daysAgo } from "../dates";

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
    it("??", () => {});
  });
});
