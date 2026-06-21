import { findFiles } from "../scanner/fileScanner.js";
import { DEFAULT_IGNORES } from "../config/defaults.js";

export const runScan = async (): Promise<void> => {
  console.log("Scanning repository...");

  const result = await findFiles(process.cwd(), DEFAULT_IGNORES);

  console.log(`Found ${result.files.length} files`);
  console.log(`Warnings: ${result.warnings.length}`);

  for (const file of result.files) {
    console.log(file);
  }
};
