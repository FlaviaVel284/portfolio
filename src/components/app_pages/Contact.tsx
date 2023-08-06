import PageTitle from "../PageTitle";
import styles from "./Contact.module.css";

const Contact: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <PageTitle>CONTACT</PageTitle>
      <div className={styles.contact}>
        <div className={styles.contact_item}>
          <img className={styles.logo} src="/images/behance_big.svg" />
          <div className={styles.text}>https://www.behance.net/v_flavia99</div>
        </div>
        <div className={styles.contact_item}>
          {" "}
          <img className={styles.logo} src="/images/instagram_big.svg" />
          <div className={styles.text}>
            https://www.instagram.com/fla_v_art/
          </div>
        </div>
        <div className={styles.contact_item}>
          {" "}
          <img className={styles.logo} src="/images/mail.svg" />
          <div className={styles.text}>flavia.velcsov@yahoo.com</div>
        </div>
        <div className={styles.contact_item}>
          {" "}
          <img className={styles.logo} src="/images/dribbble.svg" />
          <div className={styles.text}>https://dribbble.com/v_flavia99</div>
        </div>
        <div className={styles.contact_item}>
          {" "}
          <img className={styles.logo} src="/images/phone.svg" />
          <div className={styles.text}>+40 755 590 208</div>
        </div>{" "}
      </div>{" "}
      <img className={styles.end_curve} src="/images/end_curve.svg" />
    </div>
  );
};

export default Contact;
