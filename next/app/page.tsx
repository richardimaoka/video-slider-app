import Image from "next/image";

export default function Home() {
  const arr = Array.from({ length: 100 }, (_, i) => i + 1);
  return (
    <main>
      {arr.map((n) => (
        <Image
          key={n}
          src={`/images/background (${n}).png`}
          width={960}
          height={540}
          alt={`background ${n}`}
        />
      ))}
    </main>
  );
}
