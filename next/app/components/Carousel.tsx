"use client";

import { useState } from "react";
import { SlidePage } from "../api/types";
import styles from "./Carousel.module.css";

interface Props {
  currentPage: SlidePage;
  allPages: SlidePage[];
}

export function Carousel(props: Props) {
  // Initialize the state upon initial rendering
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  return <div className={styles.component}></div>;
}
