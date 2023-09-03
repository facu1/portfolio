import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactMethod.module.css";

interface Props {
  icon: IconDefinition;
  type: string;
  data: string;
}

function ContactMethod({ icon, type, data }: Props) {
  return (
    <div className={styles.content}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <div>
        <h4>{type}</h4>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default ContactMethod;
