"use client";

import { SlidePage } from "../api/types";
import styles from "./Carousel.module.css";
import { HorizontalPages } from "./HorizontalPages";
import { NextButton } from "./NextButton";
import { PageWindow } from "./PageWindow";
import { PrevButton } from "./PrevButton";

interface Props {
  currentPage: SlidePage;
  allPages: SlidePage[];
}

export function Carousel(props: Props) {
  const currentPageNum = props.currentPage.pageNum;
  const lastPageNum = props.allPages.length;

  // Page num starts from 1, not 0
  const hasPrevPage = currentPageNum > 1;
  const hasNextPage = currentPageNum < lastPageNum;

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
