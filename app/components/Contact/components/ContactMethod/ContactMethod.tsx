import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactMethod.module.css";

interface Props {
  icon: IconDefinition;
  type: string;
  refurl: string;
  data: string;
}

function ContactMethod({ icon, type, refurl, data }: Props) {
  return (
    <div className={styles.content}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <div>
        <h4>{type}</h4>
        <a href={refurl} target="_blank" rel="noopener noreferrer">
          {data}
        </a>
      </div>
    </div>
  );
}

export default ContactMethod;
