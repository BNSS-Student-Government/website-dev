import React from "react";
import styles from "./Member.module.css";
import { motion } from "motion/react"

const Member = ({ name, position }) => {
  const img = require(`../../../public/assets/members-photos-480p/${name}.jpg`);
  return (
    <motion.div 
      className={styles.member} 
      initial={{x: 0, opacity:0, scale:1 }} 
      whileInView={{x:0, opacity: 1, transition: {duration: 1}}}
      whileHover={{ scale: 1.1 }}
    >
      <img className={styles.img} src={img} alt="Avatar" />
      <h2 style={{ marginBottom: "10px", paddingBottom: 0 }}>{name}</h2>
      <label style={{ marginTop: 0, paddingTop: 0 }}>{position}</label>
    </motion.div>
  );
};

export default Member;
