"use client";

import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./PrevButton.module.css";

interface Props {
  prevPageNum: number;
}

export function PrevButton(props: Props) {
  const prevPath = `/${props.prevPageNum}`;

  return (
    <Link href={prevPath}>
      <button type="button">prev</button>
    </Link>
  );
}
