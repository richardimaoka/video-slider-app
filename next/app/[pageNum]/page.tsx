import styles from "./page.module.css";

interface Props {
  params: { pageNum: string }; // for dynamic routes only
}

export default function Home(props: Props) {
  console.log(props);
  return <main></main>;
}
