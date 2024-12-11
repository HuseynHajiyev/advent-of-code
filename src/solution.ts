import fs from "fs";
import { solutionFileExitst } from "../helpers/checkIfSolutionExitst";

export async function solution(day: number): Promise<void> {
  const filePath = `inputs/input_day_${day}.txt`;
  const input = fs.readFileSync(filePath, "utf8");

  if (!solutionFileExitst(day)) {
    throw new Error(
      `Solution for day ${day} does not exist. Please check when the solution is added.\nExiting...`
    );
  }

  try {
    // Use dynamic `import` to load the solution file
    const solverModule = await import(`../solutions/solution_day_${day}.ts`);
    if (typeof solverModule.default !== "function") {
      throw new Error(
        `Default export for solution_day_${day}.ts is not a function.`
      );
    }

    const result = solverModule.default(input);
    console.log(`Solution for Day ${day}:`, result);
  } catch (error: any) {
    console.error(`Failed to run solution for Day ${day}: ${error.message}`);
  }
}
