export default function solutions_day_3(
  input: string,
  part: "a" | "b"
): number | "not ready yet" {
  switch (part) {
    case "a":
      const parsed_inputA: number[][] = parseInput_solution_3a(input);
      return solution_day_3a(parsed_inputA);
    case "b":
      const parsed_inputB: number[][] = parseInput_solution_3b(input);
      return solution_day_3b(parsed_inputB);
  }
}

function parseInput_solution_3a(input: string): number[][] {
  return input.match(/mul\(\d+,\d+\)/g)!.map((x: string) => {
    return x
      .replace(/[^0-9,]+/g, "")
      .split(",")
      .map(Number);
  });
}

function parseInput_solution_3b(input: string): number[][] {
  const not_muls = input.split(/mul\(\d+,\d+\)/);
  const muls = input.match(/mul\(\d+,\d+\)/g);
  const result: number[][] = [];
  if (!muls) return result;
  let dont_applied = false;
  for (let i = 0; i < muls?.length; i++) {
    dont_applied = apply_dont(not_muls[i], dont_applied);
    if (!dont_applied) {
      result.push(
        muls[i]
          .replace(/[^0-9,]+/g, "")
          .split(",")
          .map(Number)
      );
    }
  }
  return result;
}

function apply_dont(input: string, is_applied: boolean): boolean {
  const donts_index = input.lastIndexOf("don't()");
  const dos_index = input.lastIndexOf("do()");
  if (donts_index > -1 && dos_index > -1) {
    return donts_index > dos_index;
  }
  if (donts_index > -1 && !(donts_index > -1)) {
    return true;
  }
  if (donts_index > -1) {
    return true;
  }
  if (donts_index === -1 && dos_index === -1) {
    return is_applied;
  }
  return false;
}

function find_mul_statements(input: string): string[] {
  return input.match(/mul\(\d+,\d+\)/g)!;
}

function solution_day_3a(input: any): number | "not ready yet" {
  return input.reduce((acc: number, x: number[]) => acc + x[0] * x[1], 0);
}

function solution_day_3b(input: any): number | "not ready yet" {
  return solution_day_3a(input);
}
