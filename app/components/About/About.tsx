import Image from "next/image";
import styles from "./About.module.css";
import { PContainer } from "app/components";

function About() {
  return (
    <div style={{ width: "100%" }}>
      <PContainer>
        <div className={styles.content}>
          <div className={styles["img-side"]}>
            <Image
              src="/imgs/about.jpg"
              alt="about image"
              width={400}
              height={350}
              className={styles.img}
            />
          </div>
          <div className={styles.texts}>
            <h3>ABOUT ME</h3>
            <h2>A dedicated Full Stack Developer.</h2>
            <p>
              As a Full Stack Developer, I possess many skills in differents
              technologies like HTML, CSS, JavaScript, React, Next, Vue, Nuxt,
              Tailwind, Flutter, Node, Express, MongoDB, MySQL, and some more. I
              develop and maintain front and back applications for differents
              industries and clients. I am also a team player who knows how to
              relate to his teammates to solve problems.
            </p>
          </div>
        </div>
      </PContainer>
    </div>
  );
}

export default About;
