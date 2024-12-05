import React from "react";
import styles from "./NavBar.module.css";
import { GiVikingHelmet } from "react-icons/gi";

const NavBar = ({ scrollToFeatured }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <GiVikingHelmet style={{ width: "100%", height: "100%" }} />
      </div>
      <div className={styles.navItems}>
        <div className={styles.navLinks}>
          <div
            onClick={() => window.location.assign("/")}
            className={styles.navLink}
          >
            Home
          </div>
          <div
            onClick={() => window.location.assign("/candidates")}
            className={styles.navLink}
          >
          {/*
            2024 Elections
          */}
            
          </div>
          
          <div
            onClick={() => window.location.assign("/team")}
            className={styles.navLink}
          >
          
            Our Team
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
