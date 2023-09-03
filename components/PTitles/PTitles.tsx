import styles from "./PTitles.module.css";

interface Props {
  section: string;
  title: string;
}

function PTitles({ section, title }: Props) {
  return (
    <div className={styles.titles}>
      <h3>{section}</h3>
      <h2>{title}</h2>
    </div>
  );
}

export default PTitles;
