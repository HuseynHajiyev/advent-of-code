import { expect, test } from "bun:test";
import solution_day_1 from "../solutions/solution_day_1";

test("solution_day_1", () => {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  expect(solution_day_1(input)).toBe(11);
});
