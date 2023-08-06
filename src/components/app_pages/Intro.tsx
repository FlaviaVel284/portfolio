import * as React from "react";
import styles from "./Intro.module.css";

const Intro: React.FunctionComponent = () => {
  return (
    <div className={styles.intro_container}>
      <img src="/images/flavia_1.png" alt="" className={styles.flavia} />
      <div className={styles.intro_text}>Fla v Art</div>
    </div>
  );
};

export default Intro;
