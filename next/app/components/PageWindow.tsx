import { SlidePage } from "../api/types";
import { HorizontalPages } from "./HorizontalPages";
import styles from "./PageWindow.module.css";

interface Props {
  currentPageNum: number;
  allPages: SlidePage[];
}

export function PageWindow(props: Props) {
  return (
    <div className={styles.component}>
      <HorizontalPages
        currentPageNum={props.currentPageNum}
        images={props.allPages}
      />
    </div>
  );
}
