import { heightByProfit } from "./heightByProfit";

describe("Get height by profit percent", () => {
  it("Should get height by profit percent", () => {
    let result = heightByProfit(400, 100, 110);
    expect(result).toBe("440.00px");
  });
});
