import React from "react";
import styles from "./Candidate.module.css";
import ReactDom from "react-dom";
import profile from "./image.png";
import { PiFilmSlateFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const CandidateModal = ({ open, onClose, candidate }) => {
  if (!open) return null;

  const makePosessive = (name) => {
    if (name.charAt(name.length - 1) === "s") {
      return `${name}'`;
    } else {
      return `${name}'s`;
    }
  };

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Candidate Profile</h2>
          <IoClose id={styles.closebtn} onClick={onClose}></IoClose>
        </div>
        <div id="modal content" className={styles.modalContent}>
          <div id="info container left" className={styles.infoContainer}>
            <div id="img container" className={styles.imgContainer}>
              <img
                src={
                  candidate && candidate.headshot && candidate.headshot.data
                    ? `https://hammerhead-app-gv2sy.ondigitalocean.app${candidate.headshot.data.attributes.url}`
                    : profile
                }
                alt={profile}
              />
            </div>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
                textAlign: "center",
              }}
              id="name container"
            >
              <h2 style={{ marginBottom: "1rem", paddingBottom: "0" }}>
                {candidate && candidate.firstName + " " + candidate.lastName}
              </h2>
            </div>
            {candidate && candidate.videoLink && (
              <button
                className={styles.videoButton}
                onClick={() => openNewTab(candidate.videoLink)}
              >
                View Campaign Video
              </button>
            )}
          </div>
          <div id="right container" className={styles.modalRightContainer}>
            <h3 style={{ marginTop: "-3rem", paddingTop: "0" }}>
              {candidate &&
                candidate.vision &&
                makePosessive(candidate.firstName) +
                  " vision for Burnaby North:"}
            </h3>
            <p>{candidate && candidate.vision && candidate.vision}</p>
            <h3>
              {candidate &&
                candidate.experience &&
                makePosessive(candidate.firstName) + " leadership experience:"}
            </h3>
            <p>{candidate && candidate.experience && candidate.experience}</p>
            <h3>
              {candidate &&
                candidate.additional &&
                "Additional information " +
                  candidate.firstName +
                  " wants to share:"}
            </h3>
            <p>{candidate && candidate.additional && candidate.additional}</p>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default CandidateModal;
