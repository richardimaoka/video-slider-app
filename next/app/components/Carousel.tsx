"use client";

import { useEffect, useState } from "react";
import { SlidePage } from "../api/types";
import styles from "./Carousel.module.css";
import { CarouselPages } from "./CarouselPages";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

type SlidePageExtended = SlidePage & {
  priority: boolean;
  eager?: boolean;
  isLoaded: boolean;
};

function extendPages(
  pages: SlidePage[],
  currentPageNum: number
): SlidePageExtended[] {
  return pages.map((page, i) => ({
    ...page,
    priority: i === currentPageNum - 1,
    isLoaded: false,
  }));
}

interface Props {
  initialPageNum: number;
  allPages: SlidePage[];
}

export function Carousel(props: Props) {
  const [currentPageNum, setCurrentPageNum] = useState(props.initialPageNum);
  const lastPageNum = props.allPages.length;

  const [allPagesExtended, setAllPagesExtended] = useState(
    extendPages(props.allPages, currentPageNum)
  );

  console.log("Carousel", currentPageNum, allPagesExtended[currentPageNum - 1]);

  // Page num starts from 1, not 0
  const hasPrevPage = currentPageNum > 1;
  const hasNextPage = currentPageNum < lastPageNum;

  const prevPath = `?page=${currentPageNum - 1}`;
  const nextPath = `?page=${currentPageNum + 1}`;

  function onPrevPage() {
    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
    // > Next.js allows you to use the native window.history.pushState and window.history.replaceState methods to update the browser's history stack without reloading the page.
    // Since <Link> and useRouter() both fetches RSC payloads from server, we need to use a native history API for pure-client routing, NOT to send anything to the server.
    window.history.pushState(null, "", prevPath);

    // update state
    const prevPage = currentPageNum - 1;
    const updatedPages = allPagesExtended.map((e) => ({ ...e }));
    if (0 < prevPage && prevPage < allPagesExtended.length) {
      updatedPages[prevPage - 1].priority = true;
    }
    setAllPagesExtended(updatedPages);
    setCurrentPageNum(prevPage);
  }

  function onNextPage() {
    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
    // > Next.js allows you to use the native window.history.pushState and window.history.replaceState methods to update the browser's history stack without reloading the page.
    // Since <Link> and useRouter() both fetches RSC payloads from server, we need to use a native history API for pure-client routing, NOT to send anything to the server.
    window.history.pushState(null, "", nextPath);

    // update state
    const nextPage = currentPageNum + 1;
    const updatedPages = allPagesExtended.map((e) => ({ ...e }));
    if (0 < nextPage && nextPage < allPagesExtended.length) {
      updatedPages[nextPage - 1].priority = true;
    }
    setAllPagesExtended(updatedPages);
    setCurrentPageNum(nextPage);
  }

  function onPageLoaded(pageNum: number) {
    const updated = allPagesExtended.map((e) => ({ ...e }));
    if (0 < pageNum && pageNum < allPagesExtended.length) {
      updated[pageNum - 1].isLoaded = true;
    }
    setAllPagesExtended(updated);
  }

  return (
    <div className={styles.component}>
      <CarouselPages
        currentPageNum={currentPageNum}
        onPageLoaded={onPageLoaded}
        images={props.allPages}
      />
      <div className={styles.buttons}>
        <PrevButton
          prevPath={prevPath}
          onPrevPage={onPrevPage}
          disabled={!hasPrevPage}
        />
        <NextButton
          nextPath={nextPath}
          onNextPage={onNextPage}
          disabled={!hasNextPage}
        />
      </div>
    </div>
  );
}
