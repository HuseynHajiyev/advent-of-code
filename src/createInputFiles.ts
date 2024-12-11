import fs from "fs";
import path from "path";

export async function createInputFiles(
  day: number,
  data: string
): Promise<void> {
  const dir = path.resolve("inputs");
  const filePath = path.join(dir, `input_day_${day}.txt`);
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, data, "utf-8");
    console.log(`Input for Day ${day} has been saved to: ${filePath}`);
  } catch (error: any) {
    console.error(`Failed to write file for Day ${day}: ${error.message}`);
    throw error;
  }
}
