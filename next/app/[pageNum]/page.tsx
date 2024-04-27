import { SlidePage } from "../api/types";
import { Carousel } from "../components/Carousel";
import styles from "./page.module.css";

interface Props {
  params: { pageNum: string }; // for dynamic routes only
}

async function getPages() {
  const res = await fetch("http://localhost:3000/api/slidePages", {
    cache: "no-store",
  });
  const pages = (await res.json()) as SlidePage[];

  return pages;
}

async function getCurrentPage(pageNum: string) {
  const res = await fetch(`http://localhost:3000/api/slidePages/${pageNum}`, {
    cache: "no-store",
  });
  const page = (await res.json()) as SlidePage;

  return page;
}

export default async function Page(props: Props) {
  const pages = await getPages().catch((error) => {
    console.log("error upon page rendering");
    console.log(error);
    return new Error("internal error happened");
  });
  if (pages instanceof Error) {
    throw new Error("error from getPages()");
  }

  const currentPage = await getCurrentPage(props.params.pageNum).catch(
    (error) => {
      console.log("error upon page rendering");
      console.log(error);
      return new Error("internal error happened");
    }
  );
  if (currentPage instanceof Error) {
    throw new Error("error from getCurrentPage()");
  }

  return <Carousel currentPage={currentPage} allPages={pages} />;
}
