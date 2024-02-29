import React from "react";
import styles from "./Hero.module.css";
import "./Hero.css";
import img from "./newschool.png";

const Hero = ({ imageName, title, subTitle, children }) => {
  const s = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={s}>
      <div className={styles.hero}>
        <h1 style={{ marginLeft: "1rem", marginRight: "1rem" }}>{title}</h1>
        <plaintext className={styles.sub}>{subTitle}</plaintext>
        {children}
      </div>
    </div>
  );
};

export default Hero;
