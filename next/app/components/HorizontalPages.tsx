import Image from "next/image";
import { SlidePage } from "../api/types";
import styles from "./HorizontalPages.module.css";
import { SlidePageComponent } from "./SlidePageComponent";

interface Props {
  currentPageNum: number;
  images: SlidePage[];
}

export function HorizontalPages(props: Props) {
  const pageOffset = props.currentPageNum - 1;
  // `-0%` makes it a bit awkward, so special handling for 0%
  const translatePercentage = pageOffset === 0 ? 0 : -100 * pageOffset;

  return (
    <div
      className={styles.component}
      style={{
        // simple props can make client-side animations!!
        transition: "transform 0.3s ease-in-out",
        transform: `translate(${translatePercentage}%)`,
      }}
    >
      {props.images.map((i) => (
        <SlidePageComponent
          key={i.id}
          pageNum={i.pageNum}
          imagePath={i.imageUrl}
        />
      ))}
    </div>
  );
}
