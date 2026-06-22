import { readFile } from "node:fs/promises";

const fileReader = async (path: string): Promise<string> => {
    const content = await readFile(path, "utf-8");

    return content;
};

export { fileReader };
