import Gears from "./gears";
import Nav from "./nav";
import styles from "styles/header.module.css"

export default function Header() {
    return (
      <header className={styles.box}>
        <span className={styles.topLeft}>
          <Gears text="CUBE"/>
        </span>
        <Nav />
      </header>
    );
}