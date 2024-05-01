"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./NextButton.module.css";

interface Props {
  nextPath: string;
  onNextPage: () => void;
  disabled?: boolean;
}

export function NextButton(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  // Should only run once, to handle onClick purely on client-side (i.e.) DO NOT send anything to the server.
  useEffect(
    () => {
      setIsLoading(false);
    },
    // https://react.dev/reference/react/useEffect#examples-dependencies
    // Passing an empty dependency array
    // If your Effect truly doesn’t use any reactive values, it will only run after the initial render.
    []
  );

  return isLoading ? (
    <Link href={props.nextPath}>
      <button type="button">next</button>
    </Link>
  ) : (
    <button type="button" onClick={props.onNextPage}>
      next
    </button>
  );
}
