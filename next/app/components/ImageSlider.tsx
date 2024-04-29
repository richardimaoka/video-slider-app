import Image from "next/image";
import { SlidePage } from "../api/types";
import styles from "./ImageSlider.module.css";

interface Props {
  images: SlidePage[];
}

export function ImageSlider(props: Props) {
  return (
    <div className={styles.component}>
      {props.images.map((i) => (
        <Image
          className={styles.image}
          key={i.id}
          src={i.imageUrl}
          alt=""
          width={960}
          height={540}
        />
      ))}
    </div>
  );
}
