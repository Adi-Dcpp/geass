import { describe, it, expect } from "vitest";
import { consoleLogIssues } from "../src/rules/consoleLogRule.js"

describe("consoleLogIssues", () => {
    it("finds console.log statements", () => {
        const content = `
const a = 1;
console.log(a);
console.log("hello");
`;

        const issues = consoleLogIssues(content, "test.ts");
        console.log(issues);
        expect(issues).toHaveLength(2);
        expect(issues[0]?.line).toBe(3);
        expect(issues[1]?.line).toBe(4);
    });
});