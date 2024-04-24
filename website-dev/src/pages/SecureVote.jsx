import React, { useState } from "react";
import { VscChecklist } from "react-icons/vsc";
import styles from "./styles/SecureVote.module.css";

const SecureVote = () => {
  const [stage, setStage] = useState(0);
  const currentDate = new Date();
  /* voting open April 26th of April at 7:00AM */
  const votingOpenDate = new Date("2024-04-26T07:00:00");
  /* voting closes April 26th of April at 11:59AM */
  const votingCloseDate = new Date("2024-04-26T11:59:00");

  // before voting period
  if (currentDate < votingOpenDate) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          textAlign: "center",
          padding: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
            textAlign: "center",
            padding: "0.5rem",
          }}
        >
          <h1>Secure-Vote</h1>
          <VscChecklist size={50} />
        </div>
        Voting portal will open on voting day. Your teacher will give you
        instructions!
        <button
          className={styles.btnMain}
          onClick={() => (window.location.href = "/candidates")}
        >
          <h3 style={{ margin: "unset" }}>Return to Candidate Page</h3>
        </button>
      </div>
    );
  }
  // after voting period
  if (currentDate > votingCloseDate) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
          <h1>Secure-Vote</h1>
          <VscChecklist size={50} />
        </div>
        Voting portal is closed. Please contact your teacher if you have any
        questions.
      </div>
    );
  }

  // during voting period
  return (
    <div>
      <h1>Secure-Vote</h1>
      <h3>Please Select Grade</h3>
    </div>
  );
};

export default SecureVote;
