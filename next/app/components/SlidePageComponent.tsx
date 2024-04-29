import { useState } from "react";
import styles from "./SlidePageComponent.module.css";
import Image from "next/image";

interface Props {
  pageNum: number;
  imagePath: string;
}

export function SlidePageComponent(props: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  function onLoad() {
    setIsLoaded(true);
  }

  return (
    <div className={styles.component}>
      {isLoaded && (
        <div className={styles.numberContainer}>
          <div className={styles.number}>{props.pageNum}</div>
        </div>
      )}
      <Image
        className={styles.image}
        src={props.imagePath}
        alt={`page ${props.pageNum} image`}
        width={1920}
        height={1080}
        onLoad={onLoad}
        placeholder="blur"
        blurDataURL="/images/loading.png"
      />
    </div>
  );
}
