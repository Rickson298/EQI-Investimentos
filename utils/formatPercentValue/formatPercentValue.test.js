import { formatPercentValue } from "./formatPercentValue";

describe("Percent Value", () => {
  it("Should have value formatted", () => {
    let result = formatPercentValue("100.99%");
    expect(result).toBe("100,99%");
  });
});
