import React from "react";
import styles from "./styles/Team.module.css";
import Member from "../components/member/Member";
import { membersArr } from "../data/members";
import { motion } from "motion/react"

const Team = () => {
  return (
    <div className={styles.page}>
      <div className={styles.team}>
        {membersArr.map((member) => (
          <Member name={member.name} position={member.position} />
        ))}
      </div>
    </div>
  );
};

export default Team;
