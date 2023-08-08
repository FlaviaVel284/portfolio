import * as React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/">
        {" "}
        <div className={styles.home_button}>
          <img src="/images/left_arrow.svg" />
          <div className={styles.flav_text}>FlaVArt</div>
          <img src="/images/right_arrow.svg" />
        </div>
      </NavLink>
      <div className={styles.buttons}>
        <NavLink
          to="https://www.behance.net/v_flavia99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/behance.svg" />
        </NavLink>
        <NavLink
          to="https://www.instagram.com/fla_v_art/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/instagram.svg" />
        </NavLink>
        <NavLink to="/about">
          {" "}
          <div className={styles.nav_button}>ABOUT ME</div>
        </NavLink>
        <NavLink to="/portfolio">
          <div className={styles.nav_button}>PORTFOLIO</div>
        </NavLink>
        <NavLink to="/contact">
          <div className={styles.nav_button}>CONTACT</div>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
