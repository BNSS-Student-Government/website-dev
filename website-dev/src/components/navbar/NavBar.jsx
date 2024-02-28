import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}></div>
      <div className={styles.navItems}>
        <div className={styles.links}>
          <div className={styles.navLink}>Home</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
