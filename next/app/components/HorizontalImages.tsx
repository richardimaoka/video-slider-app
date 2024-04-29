import Image from "next/image";
import { SlidePage } from "../api/types";
import styles from "./HorizontalImages.module.css";

interface Props {
  images: SlidePage[];
}

export function HorizontalImages(props: Props) {
  return (
    <div className={styles.component}>
      {props.images.map((i, index) => (
        <div key={i.id} className={styles.page}>
          <div className={styles.numberContainer}>
            <div className={styles.number}>{index}</div>
          </div>
          <Image
            className={styles.image}
            src={i.imageUrl + "A"}
            alt=""
            width={960}
            height={540}
          />
        </div>
      ))}
    </div>
  );
}
