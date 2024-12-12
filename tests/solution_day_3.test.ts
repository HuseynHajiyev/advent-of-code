import { expect, test } from "bun:test";
import solution_day_3 from "../solutions/solution_day_3";

const inputA = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
const inputB = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
test("solution_day_2a", () => {
  expect(solution_day_3(inputA, "a")).toBe(161);
});

test("solution_day_2b", () => {
  expect(solution_day_3(inputB, "b")).toBe(48);
});
