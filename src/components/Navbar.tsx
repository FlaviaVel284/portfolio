import * as React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.home_button}>
        <img src="/images/left_arrow.svg" />
        <div className={styles.flav_text}>FlaVArt</div>
        <img src="/images/right_arrow.svg" />
      </div>
      <div className={styles.buttons}>
        <img src="/images/behance.svg" />
        <img src="/images/instagram.svg" />
        <div className={styles.nav_button}>ABOUT ME</div>
        <div className={styles.nav_button}>PORTFOLIO</div>
        <div className={styles.nav_button}>CONTACT</div>
      </div>
    </div>
  );
};

export default Navbar;
