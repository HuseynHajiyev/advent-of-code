export default function solutions_day_2(
  input: string,
  part: "a" | "b"
): number | "not ready yet" {
  const parsed_input: number[][] = parseInput_solution_2(input);
  switch (part) {
    case "a":
      return solution_day_2a(parsed_input);
    case "b":
      return solution_day_2b(parsed_input);
  }
}

function parseInput_solution_2(input: string): number[][] {
  return input.split("\n").map((line) => line.split(" ").map(Number));
}

function solution_day_2a(parsed_input: number[][]): number {
  let safe_reports = 0;
  for (const arr of parsed_input) {
    if (is_safe(arr)) {
      safe_reports++;
    }
  }
  return safe_reports;
}

function solution_day_2b(parsed_input: number[][]): number {
  let safe_reports = 0;
  for (const arr of parsed_input) {
    if (is_safe(arr) || is_safe_with_removal(arr)) {
      safe_reports++;
    }
  }
  return safe_reports;
}

function is_safe(arr: number[]): boolean {
  let asc = true;
  let desc = true;
  let direction: number | null = null;

  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }
    if (direction === null) {
      direction = Math.sign(diff);
    } else if (Math.sign(diff) !== direction) {
      return false;
    }
  }

  return asc || desc;
}

function is_safe_with_removal(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    const filtered = arr.slice(0, i).concat(arr.slice(i + 1));
    if (is_safe(filtered)) {
      return true;
    }
  }
  return false;
}
