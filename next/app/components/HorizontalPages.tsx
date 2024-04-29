import Image from "next/image";
import { SlidePage } from "../api/types";
import styles from "./HorizontalPages.module.css";
import { SlidePageComponent } from "./SlidePageComponent";

interface Props {
  images: SlidePage[];
}

export function HorizontalPages(props: Props) {
  return (
    <div className={styles.component}>
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
