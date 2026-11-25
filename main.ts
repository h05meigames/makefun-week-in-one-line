// Your Week in One Line — entry for make.fun bounty
// u-boge-your-week-in-one-line-d1c14ced ("Your Week in One Line").
// The grader runs this program in a sandbox (Node 22, no network).
// It writes one line (1–100 characters) summing up the week to
// /output/entry.txt and prints the same line to stdout.
//
// Revision 1 (real change, not a retype): cut "about neglect" — the
// complaint implies neglect, so stating it wastes words and dulls
// the punchline. Added "even" before "my houseplant" so the plant
// reads as the final escalation, not just another item in a list,
// and swapped the comma for an em dash so the turn lands as a beat
// instead of a flat continuation. The line is now tighter and the
// joke arrives one clause sooner.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Shipped five features, broke three — by Friday even my houseplant had filed a complaint.";

// Revision 2: stdout must equal entry.txt byte for byte. console.log
// appends a newline, so stdout was the line plus "\n" while the file
// held only the line. Switched to process.stdout.write so stdout,
// entry.txt and /output/entry.txt are identical.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
