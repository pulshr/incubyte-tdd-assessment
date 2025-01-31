import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  test("returns 0 for an empty string", () => {
    expect(StringCalculator.add("")).toBe(0);
  });
});
