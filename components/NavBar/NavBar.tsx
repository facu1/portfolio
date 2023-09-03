import Link from "next/link";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles["main-link"]}>
        Facundo
      </Link>
      <div className={styles.links}>
        <Link href="/#about" className={styles.link}>
          About
        </Link>
        <Link href="/#projects" className={styles.link}>
          Projects
        </Link>
        <Link href="/#contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
