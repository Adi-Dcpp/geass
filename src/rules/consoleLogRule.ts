import type { Issue } from "../types/issue.js";

const consoleLogIssues = (content: string, filePath: string): Issue[] => {
    const foundIssues: Issue[] = [];

    const lines = content.split("\n");

    for (const [i, line] of lines.entries()) {
        if (line.includes("console.log")) {
            const issue: Issue = {
                file: filePath,
                line: i + 1,
                rule: "console.log",
                message: "console.log is found",
                severity: "low"
            };

            foundIssues.push(issue);
        }
    }

    return foundIssues;
};

export { consoleLogIssues };