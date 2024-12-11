import fs from "fs";
import path from "path";

export function solutionFileExitst(
  day: number,
  directory: string = "solutions"
): boolean {
  const filePath = path.resolve(directory, `solution_day_${day}.ts`);
  return fs.existsSync(filePath);
}
