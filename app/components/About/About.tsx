import Image from "next/image";
import styles from "./About.module.css";
import { PContainer, PTitles } from "app/components";

function About() {
  return (
    <div id="about">
      <PContainer>
        <div className={styles.content}>
          <div className={styles["img-side"]}>
            <Image
              priority
              src="/imgs/about.jpg"
              alt="about image"
              width={500}
              height={450}
              className={styles.img}
            />
          </div>
          <div className={styles.texts}>
            <PTitles
              section="ABOUT ME"
              title="A dedicated Full Stack Developer."
            />
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
