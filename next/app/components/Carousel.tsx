"use client";

import { useEffect, useState } from "react";
import { SlidePage } from "../api/types";
import styles from "./Carousel.module.css";
import { NextButton } from "./NextButton";
import { PageWindow } from "./PageWindow";
import { PrevButton } from "./PrevButton";

interface Props {
  currentPageNum: number;
  allPages: SlidePage[];
}

export function Carousel(props: Props) {
  console.log("rendering Carousel");
  const [currentPageNum, setCurrentPageNum] = useState(props.currentPageNum);
  const lastPageNum = props.allPages.length;

  // Page num starts from 1, not 0
  const hasPrevPage = currentPageNum > 1;
  const hasNextPage = currentPageNum < lastPageNum;

  // Upon currentPageNum change,
  useEffect(() => {
    function onPrevPage() {
      setCurrentPageNum(currentPageNum - 1);
    }
    function onNextPage() {
      setCurrentPageNum(currentPageNum + 1);
    }

    window.addEventListener("prevpage", onPrevPage);
    window.addEventListener("nextpage", onNextPage);
    return () => {
      window.removeEventListener("prevpage", onPrevPage);
      window.removeEventListener("nextpage", onNextPage);
    };
  }, [currentPageNum]);

  return (
    <div className={styles.component}>
      <PageWindow currentPageNum={currentPageNum} allPages={props.allPages} />
      <div className={styles.buttons}>
        <PrevButton prevPageNum={currentPageNum - 1} disabled={!hasPrevPage} />
        <NextButton nextPageNum={currentPageNum + 1} disabled={!hasNextPage} />
      </div>
    </div>
  );
}
