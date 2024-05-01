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

interface Props {
  initialPageNum: number;
  initialAllPages: SlidePageExtended[];
}

export function Carousel(props: Props) {
  const [currentPageNum, setCurrentPageNum] = useState(props.initialPageNum);
  const lastPageNum = props.initialAllPages.length;

  const [allPagesExtended, setAllPagesExtended] = useState(
    props.initialAllPages
  );

  console.log("Carousel", currentPageNum, allPagesExtended);

  // Page num starts from 1, not 0
  const hasPrevPage = currentPageNum > 1;
  const hasNextPage = currentPageNum < lastPageNum;

  const prevPath = `?page=${currentPageNum - 1}`;
  const nextPath = `?page=${currentPageNum + 1}`;

  function onPrevPage() {
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
        images={props.initialAllPages}
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
