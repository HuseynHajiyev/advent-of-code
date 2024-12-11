import fs from "fs";
import path from "path";

export function countSolutions(directory: string = "solutions"): number {
  try {
    const dirPath = path.resolve(directory);

    if (!fs.existsSync(dirPath)) {
      console.warn(`Directory ${directory} does not exist.`);
      return 0;
    }

    const files = fs.readdirSync(dirPath);

    const solutionFiles = files.filter((file) => {
      const filePath = path.join(dirPath, file);
      return fs.statSync(filePath).isFile();
    });

    // Return the count of solution files
    return solutionFiles.length;
  } catch (error: any) {
    console.error(`Error while counting solutions: ${error.message}`);
    return 0;
  }
}
