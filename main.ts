// Two Robots entry: writes one line of awkward robot elevator small talk to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Two strangers, one small metal box, and a silence that begs to be debugged out loud.
const line = 'So... do you also pretend to recalculate your route every time the doors open on the wrong floor?';

mkdirSync(outDir, { recursive: true });
// The lift is small, so the chat file gets a proper label before it is filed away.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
