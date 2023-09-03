import { PContainer } from "app/components";
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div style={{ width: "100%", backgroundColor: "#f9f9f9" }}>
      <PContainer>
        <div className={styles.content}>
          <h3>PORTFOLIO</h3>
          <h2>Here are some project I done.</h2>
          <div style={{ height: 200 }}></div>
        </div>
      </PContainer>
    </div>
  );
}

export default Portfolio;
