import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProjectCard.module.css";

interface Props {
  reverse?: boolean;
  liveDemo: string;
  title: string;
  desc: string;
  stack: string[];
  code: string;
  children: React.ReactNode;
}

function ProjectCard({
  reverse = false,
  liveDemo,
  title,
  desc,
  stack,
  code,
  children,
}: Props) {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles["img-container"]}>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {children}
        </a>
      </div>
      <div className={styles["txt-container"]}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles.stack}>
          {stack.map((tech) => (
            <h2 key={tech}>{tech}</h2>
          ))}
        </div>
        <div className={styles.links}>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <p>Code</p>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <p>Live Demo</p>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={styles.icon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
