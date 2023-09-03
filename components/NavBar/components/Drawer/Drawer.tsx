import Link from "next/link";
import styles from "./Drawer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDrawerContext } from "app/context";

function Drawer() {
  const { drawerState, setDrawerState } = useDrawerContext();

  const closeDrawer = () => {
    setDrawerState(false);
  };

  return (
    <div className={`${styles.content} ${drawerState ? styles.open : ""}`}>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.button}
        onClick={closeDrawer}
      />
      <div className={styles.links}>
        <Link href="/" onClick={closeDrawer}>
          Home
        </Link>
        <Link href="/#about" onClick={closeDrawer}>
          About
        </Link>
        <Link href="/#projects" onClick={closeDrawer}>
          Projects
        </Link>
        <Link href="/#contact" onClick={closeDrawer}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
