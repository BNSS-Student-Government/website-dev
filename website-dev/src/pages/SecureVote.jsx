import React, { useState } from "react";
import { VscChecklist } from "react-icons/vsc";
import styles from "./styles/SecureVote.module.css";

const SecureVote = () => {
  const [stage, setStage] = useState(0);
  const [grade, setGrade] = useState(0);
  const currentDate = new Date();
  /* voting open April 26th of April at 7:00AM */
  const votingOpenDate = new Date("2024-04-26T07:30:00");
  /* voting closes April 26th of April at 11:59AM */
  const votingCloseDate = new Date("2024-04-26T10:37:00");

  const gr8link =
    "https://forms.office.com/pages/responsepage.aspx?id=LV7swROUrEqeab99Ida2QlHxFL9pmx9Lh4NNEepFi3JUQlczNDVFUllYVzNNVlI2OFpLQVZCS1g3OC4u";
  const gr9link =
    "https://forms.office.com/pages/responsepage.aspx?id=LV7swROUrEqeab99Ida2QlHxFL9pmx9Lh4NNEepFi3JURVNLQldNQjQyVURZT05QOThCQTA5Q01EMC4u";
  const gr10link =
    "https://forms.office.com/pages/responsepage.aspx?id=LV7swROUrEqeab99Ida2QlHxFL9pmx9Lh4NNEepFi3JUMThWMVFQQVlQREtGT0I5Q1lUWUg1RUVFUy4u";
  const gr11link =
    "https://forms.office.com/pages/responsepage.aspx?id=LV7swROUrEqeab99Ida2QlHxFL9pmx9Lh4NNEepFi3JURVJSN1lLWDlNT0FGTVVJTkkzSFNONU9IMy4u";

  const getLink = (grade) => {
    /* switch case for grade */
    switch (grade) {
      case 8:
        return gr8link;
      case 9:
        return gr9link;
      case 10:
        return gr10link;
      case 11:
        return gr11link;
      default:
        return "";
    }
  };

  const handleClick = (grade) => {
    setGrade(grade);
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
      {grade === 0 ? (
        <div id="container" className={styles.container}>
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
      ) : (
        <>
          <iframe
            title="form"
            width="640px"
            height="480px"
            src={`${getLink(grade)}&embed=true`}
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
            allowfullscreen
            webkitallowfullscreen
            mozallowfullscreen
            msallowfullscreen
          >
            {" "}
          </iframe>
          <button className={styles.btnMain} onClick={() => setGrade(0)}>
            Back
          </button>
        </>
      )}
    </div>
  );
};
export default SecureVote;
