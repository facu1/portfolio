import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <h3>Facundo</h3>
      <div className={styles.links}>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default NavBar;
