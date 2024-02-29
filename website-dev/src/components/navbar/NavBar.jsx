import React from "react";
import styles from "./NavBar.module.css";
import { GiVikingHelmet } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <GiVikingHelmet style={{ width: "100%", height: "100%" }} />
      </div>
      <div className={styles.navItems}>
        <div className={styles.navLinks}>
          <div className={styles.navLink}>Home</div>
          <div className={styles.navLink}>Our Team</div>
          <div className={styles.navLink}>Elections</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
