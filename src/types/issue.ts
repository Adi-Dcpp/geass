export type Severity = "low" | "medium" | "high" | "critical";

export interface Issue {
  file: string;
  line: number;
  rule: string;
  message: string;
  severity: Severity;
}