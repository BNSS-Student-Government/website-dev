import React, { useState } from "react";
import { VscChecklist } from "react-icons/vsc";
import styles from "./styles/SecureVote.module.css";

const SecureVote = () => {
  const [stage, setStage] = useState(0);
  const currentDate = new Date();
  /* voting open April 26th of April at 7:00AM */
  const votingOpenDate = new Date("2024-04-26T07:30:00");
  /* voting closes April 26th of April at 11:59AM */
  const votingCloseDate = new Date("2024-04-26T10:37:00");

  const gr8link = "https://forms.office.com/r/BCXwmvcDWC";
  const gr9link = "https://forms.office.com/r/RapBFPticA";
  const gr10link = "https://forms.office.com/r/Xs7MeBukXM";
  const gr11link = "https://forms.office.com/r/fhxJ7tmmft";

  const handleClick = (grade) => {
    /* switch case for grade */
    switch (grade) {
      case 8:
        window.open(gr8link, "_blank");
        console.log("Grade 8");
        break;
      case 9:
        window.open(gr9link, "_blank");
        console.log("Grade 9");
        break;
      case 10:
        window.open(gr10link, "_blank");
        console.log("Grade 10");
        break;
      case 11:
        window.open(gr11link, "_blank");
        console.log("Grade 11");
        break;
      default:
        break;
    }
  };

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
    <div className={styles.page}>
      <h1 style={{ margin: "unset" }}>Voting Portal is Now Open!</h1>
      <div className={styles.container}>
        <h3>Please Select Grade to Cast Your Votes</h3>
        <button className={styles.btnVote} onClick={() => handleClick(8)}>
          Grade 8
        </button>
        <button className={styles.btnVote} onClick={() => handleClick(9)}>
          Grade 9
        </button>
        <button className={styles.btnVote} onClick={() => handleClick(10)}>
          Grade 10
        </button>
        <button className={styles.btnVote} onClick={() => handleClick(11)}>
          Grade 11
        </button>
      </div>
    </div>
  );
};
export default SecureVote;
