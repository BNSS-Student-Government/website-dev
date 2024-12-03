import React from "react";
import styles from "./Member.module.css";

const Member = ({ name, position }) => {
  const img = require(`../../../public/assets/members-photos/${name}.JPG`);
  return (
    <div className={styles.member}>
      <img className={styles.img} src={img} alt="Avatar" />
      <h2 style={{ marginBottom: "10px", paddingBottom: 0 }}>{name}</h2>
      <label style={{ marginTop: 0, paddingTop: 0 }}>{position}</label>
    </div>
  );
};

export default Member;
