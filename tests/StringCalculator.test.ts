import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  test("returns 0 for an empty string", () => {
    expect(StringCalculator.calculate("")).toBe(0);
  });
});

test("returns the number itself for a single number", () => {
  expect(StringCalculator.calculate("1")).toBe(1);
});

test("returns the sum of two numbers", () => {
  expect(StringCalculator.calculate("1,2")).toBe(3);
});

test("returns sum for multiple numbers", () => {
  expect(StringCalculator.calculate("1,2,3,4")).toBe(10);
});

test("handles new line as a delimiter", () => {
  expect(StringCalculator.calculate("1\n2,3")).toBe(6);
});

test("handles custom delimiter", () => {
  expect(StringCalculator.calculate("//;\n1;2")).toBe(3);
});

test("throws an exception for negative numbers", () => {
  expect(() => StringCalculator.calculate("1,-2,3")).toThrow(
    "negative numbers not allowed -2"
  );
});

test("throws an exception for multiple negative numbers", () => {
  expect(() => StringCalculator.calculate("1,-2,-3,4")).toThrow(
    "negative numbers not allowed -2,-3"
  );
});

test("returns product of numbers when custom delimiter is an asterisk", () => {
  const result = StringCalculator.calculate("//*\n2*3");
  expect(result).toBe(6);
});
