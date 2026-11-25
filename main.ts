// The GPS Swears It Was a Shortcut — entry generator (Node stdlib only).
// Writes the GPS's one-line excuse to /output/entry.txt (override with
// MAKEFUN_OUTPUT_DIR). Gate: 1-200 chars, single line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry: 128 chars, single line, GPS first-person, smug/defensive.
// Reversal, not escalation: "wrong turn" reframed as a shortcut; the punch
// (the dead never complain about traffic) cannot be guessed from clause 1.
// Concrete detail: the cemetery. No "recalculating" joke (the brief calls
// that the usual one), no abstract closer, no dialogue tags.
const ENTRY =
  "That wasn't a wrong turn, it was a shortcut through the cemetery \u2014 the dead never complain about traffic, so neither should you.";

// Gate: plain text, one line, 1..200 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1..200`);
}
if (/\n/.test(ENTRY) || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
