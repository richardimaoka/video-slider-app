import styles from "./ImagePage.module.css";

interface Props {
  currentIndex: number;
  index: number;
  isPreload: boolean;
  isLoaded: boolean;
  loading: "lazy" | "eager";
}

export function ImagePage(props: Props) {
  return <div className={styles.component}></div>;
}
