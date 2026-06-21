import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";

export type ScanResult = {
  files: string[];
  warnings: string[];
};

export async function findFiles(
  rootPath: string,
  ignoredDirectories: string[],
): Promise<ScanResult> {
  const files: string[] = [];
  const warnings: string[] = [];

  const walk = async (currentPath: string) => {
    try {
      const entries = await readdir(currentPath, { withFileTypes: true });

      for (const entry of entries) {
        const newPath: string = join(currentPath, entry.name);
        if (entry.isDirectory()) {
          if (!ignoredDirectories.includes(entry.name)) {
            await walk(newPath);
          }
        } else if (entry.isFile()) {
          files.push(relative(rootPath, newPath));
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      warnings.push(`Error reading ${currentPath}: ${message}`);
    }
  };

  await walk(rootPath);

  return { files, warnings };
}
