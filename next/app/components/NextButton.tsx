"use client";

import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import styles from "./NextButton.module.css";

interface Props {
  nextPageNum: number;
  disabled?: boolean;
}

export function NextButton(props: Props) {
  const nextPath = `/${props.nextPageNum}`;

  return (
    <Link className={styles.component} href={nextPath}>
      <button type="button" disabled={props.disabled}>
        next
      </button>
    </Link>
  );

  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();

  // function onClick() {
  //   router.push(nextPath);
  // }

  // // Should only run once, to handle onClick purely on client-side (i.e.) DO NOT send anything to the server.
  // useEffect(
  //   () => {
  //     // setIsLoading(false);
  //   },
  //   // https://react.dev/reference/react/useEffect#examples-dependencies
  //   // Passing an empty dependency array
  //   // If your Effect truly doesn’t use any reactive values, it will only run after the initial render.
  //   []
  // );

  // return isLoading ? (
  //   <Link href={nextPath}>
  //     <button type="button">next</button>
  //   </Link>
  // ) : (
  //   <button type="button" onClick={onClick}>
  //     next
  //   </button>
  // );
}
