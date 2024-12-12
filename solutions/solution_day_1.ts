export default function solutions_day_1(
  input: string,
  part: "a" | "b"
): number | "not ready yet" {
  switch (part) {
    case "a":
      return solution_day_1a(input);
    case "b":
      return solution_day_1b(input);
  }
}

function solution_day_1a(input: string): number {
  const inputs = parseInput_solution_1(input);
  const sorted_arrays = [sort_array(inputs[0]), sort_array(inputs[1])];
  return find_difference(sorted_arrays);
}

function solution_day_1b(input: string): number {
  const inputs = parseInput_solution_1(input);
  const leftDict: { [key: number]: number } = {};
  let sum = 0;
  for (let i = 0; i < inputs[0].length; i++) {
    leftDict[inputs[0][i]] = leftDict[inputs[0][i]]
      ? leftDict[inputs[0][i]] + 1
      : 1;
  }

  sum = 0;
  for (let input of inputs[1]) {
    if (input in leftDict) sum += leftDict[input] * input;
  }
  return sum;
}

function parseInput_solution_1(input: string): number[][] {
  const split_by_newline = input.split("\n");
  const out: number[][] = [[], []];
  for (let i = 0; i < split_by_newline.length; i++) {
    let split_line = split_by_newline[i].split("   ");
    out[0].push(parseInt(split_line[0].trim()));
    out[1].push(parseInt(split_line[1].trim()));
  }
  return out;
}

function sort_array(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const middle = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] === pivot) {
      middle.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const sortedLeft = sort_array(left);
  const sortedRight = sort_array(right);
  return [...sortedLeft, ...middle, ...sortedRight];
}

function find_difference(arr: number[][]): number {
  let difference = 0;
  for (let i = 0; i < arr[0].length; i++) {
    difference += Math.abs(arr[0][i] - arr[1][i]);
  }
  return difference;
}
