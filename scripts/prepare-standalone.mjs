import { cpSync, existsSync } from "node:fs";

if (existsSync(".next/standalone")) {
  cpSync("public", ".next/standalone/public", { recursive: true });
  cpSync(".next/static", ".next/standalone/.next/static", { recursive: true });
}

if (existsSync("out")) {
  cpSync("out", "dist", { recursive: true });
}
