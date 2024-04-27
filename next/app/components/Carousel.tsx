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
  const currentPageNum = props.currentPage.pageNum;
  const lastPageNum = props.allPages.length;

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
