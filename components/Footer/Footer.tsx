import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <p>Copyright © 2023. All rights are reserved</p>
      </div>
    </div>
  );
}

export default Footer;
