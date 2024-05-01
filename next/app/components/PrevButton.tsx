"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./PrevButton.module.css";

interface Props {
  prevPath: string;
  onPrevPage: () => void;
  disabled?: boolean;
}

export function PrevButton(props: Props) {
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

  function a() {}
  return isLoading ? (
    <Link href={props.prevPath}>
      <button type="button">prev</button>
    </Link>
  ) : (
    <button type="button" onClick={props.onPrevPage}>
      prev
    </button>
  );
}
