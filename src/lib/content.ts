import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export function loadContent<T>(filename: string): T {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}
