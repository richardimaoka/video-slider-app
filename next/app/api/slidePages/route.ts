import { readFileSync } from "fs";
import { SlidePage } from "../types";

export async function GET() {
  const fileContents = readFileSync(
    process.cwd() + "/app/api/slidePages/pages.json",
    "utf8"
  );
  const pages: SlidePage[] = JSON.parse(fileContents);

  return Response.json({ pages });
}
