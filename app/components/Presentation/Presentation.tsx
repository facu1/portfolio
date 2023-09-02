import Image from "next/image";
import styles from "./Presentation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Presentation() {
  return (
    <div className={styles.content}>
      <div className={styles.presentation}>
        <div className={styles.texts}>
          <h1 className={styles.title}>Full Stack Developer</h1>
          <p className={styles.text}>
            Hello, I&apos;m Facundo Gonzalez. A dedicated Full Stack Developer
            living in Resistencia, Chaco, Argentina.
          </p>
          <div className={styles.links}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </div>
        </div>
        <Image
          src="/imgs/avatar.jpg"
          alt="avatar image"
          width={1000}
          height={1000}
          className={styles.avatar}
        />
      </div>
      <div className={styles.techs}>
        <p>Technologies</p>
        <div className={styles.list}>
          <Image
            src="/imgs/reactjs_logo.png"
            alt="reactjs logo"
            width={50}
            height={50}
          />
          <Image
            src="/imgs/vue_logo.png"
            alt="reactjs logo"
            width={50}
            height={50}
          />
          <Image
            src="/imgs/flutter_logo.png"
            alt="reactjs logo"
            width={50}
            height={50}
          />
          <Image
            src="/imgs/node_logo.png"
            alt="reactjs logo"
            width={50}
            height={50}
          />
          <Image
            src="/imgs/express_logo.png"
            alt="reactjs logo"
            width={50}
            height={50}
          />
          <Image
            src="/imgs/mongo_logo.png"
            alt="reactjs logo"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.whitespace} />
      </div>
    </div>
  );
}

export default Presentation;
