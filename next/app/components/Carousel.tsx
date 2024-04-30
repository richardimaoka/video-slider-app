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
  const [currentPageNum, setCurrentPageNum] = useState(props.currentPageNum);
  const lastPageNum = props.allPages.length;

  // Page num starts from 1, not 0
  const hasPrevPage = currentPageNum > 1;
  const hasNextPage = currentPageNum < lastPageNum;

  useEffect(() => {
    function onNextPage() {
      console.log("onNextPage triggered");
      setCurrentPageNum(currentPageNum + 1);
    }

    window.addEventListener("nextpage", onNextPage);
    return () => {
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
