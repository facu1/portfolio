"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { Drawer } from "./components";
import { useDrawerContext } from "app/context";

function NavBar() {
  const { setDrawerState } = useDrawerContext();

  const openDrawer = () => {
    setDrawerState(true);
  };

  return (
    <>
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
        <FontAwesomeIcon
          icon={faBars}
          className={styles.button}
          onClick={openDrawer}
        />
      </div>
      <Drawer />
    </>
  );
}

export default NavBar;
