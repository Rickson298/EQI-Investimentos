import { getProfitPercent } from "./getProfitPercent";

describe("Profit Percent", () => {
  it("Should format profit value", () => {
    let result = getProfitPercent(100, 110);
    expect(result).toBe("10.00%");
  });
});
