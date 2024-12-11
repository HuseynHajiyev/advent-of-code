import fs from "fs";
import path from "path";

export function inputFileExists(
  day: number,
  directory: string = "inputs"
): boolean {
  const filePath = path.join(directory, `input_day_${day}.txt`);
  return fs.existsSync(filePath);
}
