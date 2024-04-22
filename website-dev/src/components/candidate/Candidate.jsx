import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profile from "./image.png";
import styles from "./Candidate.module.css";
import CandidateModal from "./CandidateModal";

const Candidate = ({ candidate }) => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setText("View Profile");
  };
  const handleMouseLeave = () => {
    setText("");
  };
  const thumbnailImg =
    candidate &&
    candidate.headshot &&
    candidate.headshot.data.attributes.formats.small
      ? `https://hammerhead-app-gv2sy.ondigitalocean.app${candidate.headshot.data.attributes.formats.small.url}`
      : candidate &&
        candidate.headshot &&
        candidate.headshot.data.attributes.formats.thumbnail
      ? `https://hammerhead-app-gv2sy.ondigitalocean.app${candidate.headshot.data.attributes.formats.thumbnail.url}`
      : profile;

  console.log(thumbnailImg);

  return (
    <>
      <CandidateModal
        open={showModal}
        onClose={() => setShowModal(false)}
        candidate={candidate}
      ></CandidateModal>

      <div
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setShowModal(true)}
      >
        <div
          className={styles[`card-img`]}
          style={{
            backgroundImage: `url(${thumbnailImg})`,
            backgroundSize: "cover", // Cover the entire div
            backgroundRepeat: "no-repeat", // No repeating the image
            backgroundPosition: "top", // Center the image
          }}
        >
          <h4>{text}</h4>
        </div>
        <div className={styles[`card-content`]}>
          {candidate && candidate.firstName && candidate.lastName ? (
            `${candidate.firstName} ${candidate.lastName}`
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={styles.wireframe}></div>
              <div className={styles.wireframe}></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Candidate;
