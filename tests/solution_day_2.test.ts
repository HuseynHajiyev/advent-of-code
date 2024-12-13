import { expect, test } from "bun:test";
import solution_day_2 from "../solutions/solution_day_2";

test("solution_day_2a", () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  expect(solution_day_2(input, "a")).toBe(2);
});

test("solution_day_2b", () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  expect(solution_day_2(input, "b")).toBe(4);
});
