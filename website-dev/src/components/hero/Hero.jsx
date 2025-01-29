import React from "react";
import styles from "./Hero.module.css";
import "./Hero.css";
import img from "./newschool.png";
import { motion } from "motion/react";

function createTextGradient(text){
  return text.split(" ").map((el, i) => (
    <motion.span
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{
        duration: 1,
        delay: i / 5,
      }}
      key={i}
    >
      {el}{" "}
    </motion.span>
  ))
}

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
        <h1 style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          {createTextGradient(title)}
        </h1>
        <motion.plaintext 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{
            duration: 1,
            delay: 1,
          }} 
          className={styles.sub}>
            {subTitle}
        </motion.plaintext>
        <motion.div
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{
            duration: 1,
            delay: 1.3,
          }} 
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
