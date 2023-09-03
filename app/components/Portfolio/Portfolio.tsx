import { PContainer, PTitles } from "app/components";
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div style={{ width: "100%", backgroundColor: "#f9f9f9" }}>
      <PContainer>
        <div className={styles.content}>
          <PTitles section="PORTFOLIO" title="Here are some project I done." />
          <div style={{ height: 200 }}></div>
        </div>
      </PContainer>
    </div>
  );
}

export default Portfolio;
