import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Waited an hour for a table, the waiter brought me a cold alarm clock, and Monday still charged me for the weekend I never got.";

if (ENTRY.length === 0 || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single non-empty line");
}
if (ENTRY.split(/\s+/).length > 25) {
  throw new Error("ENTRY must be at most 25 words");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
