import Link from "next/link";
import styles from "styles/gears.module.css";

export default function Gears({text}) {
  return (
    <>
      <div className={styles.gear}>
        <Link href="/" className={styles.topLeft}>{text}</Link>
        <span className={styles.center}></span>
      </div>
    </>
  );
}
