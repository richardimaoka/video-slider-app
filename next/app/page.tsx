import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <main>
      <div className={styles.peep}>
        <div className={styles.slider}>
          {arr.map((n) => (
            <Image
              key={n}
              src={`/images/background (${n}).png`}
              width={960}
              height={540}
              alt={`background ${n}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
