import { expect, test } from "bun:test";
import solution_day_1 from "../solutions/solution_day_1";

const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
test("solution_day_1", () => {
  expect(solution_day_1(input, "a")).toBe(11);
});

test("solution_day_1b", () => {
  expect(solution_day_1(input, "b")).toBe(31);
});
