import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  test("returns 0 for an empty string", () => {
    expect(StringCalculator.add("")).toBe(0);
  });
});

test("returns the number itself for a single number", () => {
  expect(StringCalculator.add("1")).toBe(1);
});

test("returns the sum of two numbers", () => {
  expect(StringCalculator.add("1,2")).toBe(3);
});

test("returns sum for multiple numbers", () => {
  expect(StringCalculator.add("1,2,3,4")).toBe(10);
});
