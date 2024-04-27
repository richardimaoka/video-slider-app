"use client";

import { useState } from "react";
import { SlidePage } from "../api/types";
import styles from "./Carousel.module.css";
import Link from "next/link";

interface Props {
  currentPage: SlidePage;
  allPages: SlidePage[];
}

export function Carousel(props: Props) {
  // Initialize the state upon initial rendering
  const [currentPage, setCurrentPage] = useState(props.currentPage);
  const currentPageNum = currentPage.pageNum;
  const lastPageNum = props.allPages.length;

  console.log(currentPageNum, 1, currentPageNum > 1);
  console.log(currentPageNum, lastPageNum, currentPageNum < lastPageNum );
  return (
    <div className={styles.component}>
      {currentPageNum > 1 && (
        <Link href={`/${currentPageNum - 1}`}>
          <button type="button">prev</button>
        </Link>
      )}
      {currentPageNum < lastPageNum && (
        <Link href={`/${currentPageNum + 1}`}>
          <button type="button">next</button>
        </Link>
      )}
    </div>
  );
}
