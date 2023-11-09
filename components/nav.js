import Link from "next/link";
import styles from 'styles/nav.module.css'

export default function Nav() {
    return (
      <nav className={styles.ul}>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/member">Member</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/topic">Topic</Link>
          </li>
        </ul>
      </nav>
    );
}