import styles from "./PContainer.module.css";

function PContainer({ children }: { children: any }) {
  return <div className={styles.container}>{children}</div>;
}

export default PContainer;
