import { readFileSync } from "fs";
import { SlidePage } from "../../types";

const slidePagesPath = "/api/slidePages";

export async function GET(
  request: Request,
  { params }: { params: { pageNum: string } }
) {
  const pageNum = Number(params.pageNum);

  if (isNaN(pageNum)) {
    return new Response(
      `request path = '${slidePagesPath}/${params.pageNum}' has non-numeric path segment = '${params.pageNum}'`,
      { status: 400 }
    );
  } else if (!Number.isInteger(pageNum)) {
    return new Response(
      `request path = '${slidePagesPath}/${params.pageNum}' has non-integer number = ${params.pageNum}`,
      { status: 400 }
    );
  } else if (pageNum < 1) {
    return new Response(
      `request path = '${slidePagesPath}/${params.pageNum}' has page number = ${params.pageNum}, but it should be >= 1`,
      { status: 400 }
    );
  }

  const fileContents = readFileSync(
    process.cwd() + "/app" + slidePagesPath + "/pages.json",
    "utf8"
  );
  const pages: SlidePage[] = JSON.parse(fileContents);

  if (pageNum > pages.length) {
    return new Response(
      `request path = '${slidePagesPath}/${params.pageNum}' has page number = ${params.pageNum}, but exceeds the max page = ${pages.length}`,
      { status: 400 }
    );
  }

  const page = pages[pageNum - 1];

  return Response.json({ page });
}
