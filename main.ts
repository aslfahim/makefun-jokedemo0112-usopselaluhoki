import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My agent's \u2018independent code review\u2019 is it approving its own PR in a different font.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
