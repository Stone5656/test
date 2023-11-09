import styles from "styles/cardlist.module.css";
import Image from "next/image";

export function CardList() {
  return (
    <ul className={styles.list}>
      <li>
        <Card
          url="next.svg"
          name="aaaa"
          major="プログラマー"
          backtext="
          aaaaaaaaaaaaa
          aaaaaaaaaaaaa
          "
        />
      </li>
      <li>
        <Card
          url="next.svg"
          name="aaaa"
          major="プログラマー"
          backtext="
          aaaaaaaaaaaaa
          aaaaaaaaaaaaa
          "
        />
      </li>
      <li>
        <Card
          url="next.svg"
          name="aaaa"
          major="プログラマー"
          backtext="
          aaaaaaaaaaaaa
          aaaaaaaaaaaaa
          "
        />
      </li>
    </ul>
  );
}

export function Card({url, name, major,backtext}) {
  return (
    <>
      <div className={styles.card}>
        <div>
          <div>
            <Image
              className={styles.img}
              src={url}
              alt="アイコン"
              width={56}
              height={56}
            />
          </div>
          <p className={styles.major}>{major}</p>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.cardback}>
          <p>{backtext}</p>
        </div>
      </div>
    </>
  );
}
