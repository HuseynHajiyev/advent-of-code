export function isValidInput(input: string, maxDay: number): boolean {
  const day = parseInt(input, 10);
  return !isNaN(day) && day > 0 && day <= maxDay;
}
