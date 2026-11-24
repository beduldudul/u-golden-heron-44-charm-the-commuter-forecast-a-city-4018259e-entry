// Commuter forecast for Nimbus Falls, a city that isn't.
// Fog first, then sunshine — and the rare on-time 7:40 bus.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "In Nimbus Falls, fog until nine, then sunshine — and the 7:40 bus is on time, so today already feels like a public holiday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
