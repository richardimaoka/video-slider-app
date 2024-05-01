"use client";

import { useEffect, useState } from "react";
import { SlidePage } from "../api/types";
import styles from "./Carousel.module.css";
import { CarouselPages } from "./CarouselPages";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

interface Props {
  currentPageNum: number;
  allPages: SlidePage[];
}

export function Carousel(props: Props) {
  const [currentPageNum, setCurrentPageNum] = useState(props.currentPageNum);
  const lastPageNum = props.allPages.length;

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
    setCurrentPageNum(currentPageNum - 1);
  }

  function onNextPage() {
    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
    // > Next.js allows you to use the native window.history.pushState and window.history.replaceState methods to update the browser's history stack without reloading the page.
    // Since <Link> and useRouter() both fetches RSC payloads from server, we need to use a native history API for pure-client routing, NOT to send anything to the server.
    window.history.pushState(null, "", nextPath);
    setCurrentPageNum(currentPageNum + 1);
  }

  // Whether <Image> preload for currentPageNum is completed
  const [isCurrentPageLoaded, setIsCurrentPageLoaded] = useState(false);

  // Upon currentPageNum change,
  useEffect(() => {
    setIsCurrentPageLoaded(false);
  }, [currentPageNum]);

  function onCurrentPageLoaded() {
    console.log(`current = ${currentPageNum} loaded`)
    setIsCurrentPageLoaded(true);
  }

  return (
    <div className={styles.component}>
      <CarouselPages
        currentPageNum={currentPageNum}
        onCurrentPageLoaded={onCurrentPageLoaded}
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
