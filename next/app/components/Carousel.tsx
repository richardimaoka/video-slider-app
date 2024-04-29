"use client";

import { SlidePage } from "../api/types";
import styles from "./Carousel.module.css";
import { HorizontalImages } from "./HorizontalImages";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

interface Props {
  currentPage: SlidePage;
  allPages: SlidePage[];
}

export function Carousel(props: Props) {
  const currentPageNum = props.currentPage.pageNum;
  const lastPageNum = props.allPages.length;

  // Page num starts from 1, not 0
  const drawPrevButton = currentPageNum > 1;
  const drawNextButton = currentPageNum < lastPageNum;

  return (
    <div className={styles.component}>
      <div className={styles.window}>
        {currentPageNum}
        <HorizontalImages images={props.allPages} />
      </div>
      <div className={styles.buttons}>
        {drawPrevButton && <PrevButton prevPageNum={currentPageNum - 1} />}
        {drawNextButton && <NextButton nextPageNum={currentPageNum + 1} />}
      </div>
    </div>
  );
}
