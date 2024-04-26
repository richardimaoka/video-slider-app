import Image from "next/image";
import { ImageState } from "../calc";
import styles from "./ImageSlider.module.css";

interface Props {
  images: ImageState[];
}

export function ImageSlider(props: Props) {
  return (
    <div className={styles.component}>
      {props.images.map((i) => (
        <Image key={i.id} src="" alt="" width={0} height={0} />
      ))}
    </div>
  );
}
