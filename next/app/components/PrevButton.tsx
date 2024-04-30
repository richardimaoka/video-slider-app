"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./PrevButton.module.css";

interface Props {
  prevPageNum: number;
  disabled?: boolean;
}

export function PrevButton(props: Props) {
  // const prevPath = `/${props.prevPageNum}`;
  const prevPath = `?page=${props.prevPageNum}`;

  const ref = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  function onClick() {
    if (ref.current) {
      // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
      // > Next.js allows you to use the native window.history.pushState and window.history.replaceState methods to update the browser's history stack without reloading the page.
      // Since <Link> and useRouter() both fetches RSC payloads from server, we need to use a native history API for pure-client routing, NOT to send anything to the server.
      window.history.pushState(null, "", prevPath);

      const event = new Event("prevpage", { bubbles: true });
      ref.current.dispatchEvent(event);
    }
  }

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
    <Link href={prevPath}>
      <button type="button">prev</button>
    </Link>
  ) : (
    <button ref={ref} type="button" onClick={onClick}>
      prev
    </button>
  );
}
