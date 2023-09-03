import styles from "./PContainer.module.css";

function PContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

export default PContainer;
