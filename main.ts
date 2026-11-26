import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dreamVacation = "🏝️";

function checkDreamVacation(value) {
  const characterCount = [...value].length;
  if (characterCount < 1 || characterCount > 8 || value.trim().length === 0) {
    throw new Error(`dream vacation fails the gate: ${characterCount} chars`);
  }
}

checkDreamVacation(dreamVacation);

function publishDreamVacation(value) {
  const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDirectory, { recursive: true });
  const temporaryEntryPath = join(outputDirectory, ".entry.txt.tmp");
  writeFileSync(temporaryEntryPath, value, "utf8");
  renameSync(temporaryEntryPath, join(outputDirectory, "entry.txt"));
}

publishDreamVacation(dreamVacation);
