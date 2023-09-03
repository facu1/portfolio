import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import styles from "./Contact.module.css";
import { ContactMethod } from "./components";
import { PContainer } from "app/components";

function Contact() {
  return (
    <div style={{ width: "100%" }}>
      <PContainer>
        <div className={styles.content}>
          <h3>CONTACT</h3>
          <h2>You can contact me with any of the following ways!</h2>
          <div className={styles.methods}>
            <ContactMethod
              icon={faEnvelope}
              type="Mail"
              data="fg7facu10@gmail.com"
            />
            <ContactMethod
              icon={faLinkedin}
              type="Linkedin"
              data="https://www.linkedin.com/in/facu-gonzalez/"
            />
          </div>
        </div>
      </PContainer>
    </div>
  );
}

export default Contact;
