import fsPromises from "fs/promises";
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

  // Read pages from file
  const fileContents = await fsPromises
    .readFile(process.cwd() + "/app" + slidePagesPath + "/pages.json", "utf8")
    .catch((error) => {
      console.log(error);
      return new Error("some error happened");
    });
  if (fileContents instanceof Error) {
    return new Response(`internal error`, { status: 500 });
  }

  // Needs to be `let` for a grammatical reason, but assume it's like const, which doesn't change
  let pages: SlidePage[];
  try {
    pages = JSON.parse(fileContents);
  } catch (error) {
    console.log(error);
    return new Response(`internal error`, { status: 500 });
  }

  if (pageNum > pages.length) {
    return new Response(
      `request path = '${slidePagesPath}/${params.pageNum}' has page number = ${params.pageNum}, but exceeds the max page = ${pages.length}`,
      { status: 400 }
    );
  }

  const page = pages[pageNum - 1];

  return Response.json({ page });
}
