export default function solutions_day_2(
  input: string,
  part: "a" | "b"
): number | "not ready yet" {
  switch (part) {
    case "a":
      return solution_day_2a(input);
    case "b":
      return solution_day_2b(input);
  }
}

function parseInput_solution_2(input: string): number[][] {
  const split_by_newline = input.split("\n");
  const out: number[][] = [];
  for (let i = 0; i < split_by_newline.length; i++) {
    let arr = split_by_newline[i].split(" ").map(Number);
    out.push(arr);
  }
  return out;
}

function solution_day_2a(input: string): number | "not ready yet" {
  const parsed_input: number[][] = parseInput_solution_2(input);
  let safe_reports = 0;
  for (let arr of parsed_input) {
    const asc_desc = Math.sign(arr[0] - arr[arr.length - 1]);
    if (!basic_safe_checks(arr)) continue;
    if (traverse_array(arr, asc_desc)) {
      safe_reports++;
    }
  }
  return safe_reports;
}

function traverse_array(input: number[], asc_desc: number): boolean {
  for (let i = 0; i < input.length - 1; i++) {
    if (Math.sign(input[i] - input[i + 1]) !== Math.sign(asc_desc)) {
      return false;
    }
    if (!basic_safe_checks([input[i], input[i + 1]])) return false;
  }
  return true;
}

function basic_safe_checks(input: number[]): boolean {
  if (input.length < 2) {
    return false;
  }
  const relevant_length = input.length - 1;
  const first_element = input[0];
  const last_element = input[relevant_length];
  if (first_element === last_element) return false;
  const difference = Math.abs(first_element - last_element);
  if (difference > 3 * relevant_length || difference < relevant_length) {
    return false;
  }
  return true;
}

function solution_day_2b(input: any): number | "not ready yet" {
  const parsed_input: number[][] = parseInput_solution_2(input);
  return "not ready yet";
}
