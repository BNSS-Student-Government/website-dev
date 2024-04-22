import React, { useEffect, useState } from "react";
import Candidate from "../components/candidate/Candidate";
import styles from "./styles/Candidates.module.css";

const Candidates = () => {
  const [candidates, setCandidates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hammerhead-app-gv2sy.ondigitalocean.app/api/candidates?populate=*&pagination[pageSize]=100"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCandidates(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // loading state for wireframe
  const wireframe = [1, 2, 3, 4];
  if (loading) {
    return (
      <div className={styles.page}>
        <h1>2024 Elections Candidates</h1>
        <div className={styles.positionsContainer}>
          <h2>President</h2>
          <div className={styles.sectionContainer}>
            {wireframe.slice(0, 3).map((candidate) => (
              <Candidate key={candidate} />
            ))}
          </div>
          <h2>Vice-President</h2>
          <div className={styles.sectionContainer}>
            {wireframe.map((candidate) => (
              <Candidate key={candidate} />
            ))}
          </div>
          <h2>Secretary</h2>
          <div className={styles.sectionContainer}>
            {wireframe.map((candidate) => (
              <Candidate key={candidate} />
            ))}
          </div>
          <h2>Public Relations Coordinator</h2>
          <div className={styles.sectionContainer}>
            {wireframe.map((candidate) => (
              <Candidate key={candidate} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.page}>
      <h1>2024 Elections Candidates</h1>
      <div className={styles.positionsContainer}>
        <h2>President</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "p"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
        <h2>Vice-President</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "vp"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
        <h2>Secretary</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "s"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
        <h2>Public Relations Coordinator</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "pr"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
        <h2>Grad Chair</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "g"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
        <h2>Grade 12/8 Rep</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "12"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
        <h2>Grade 11 Rep</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "11"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
        <h2>Grade 10 Rep</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "10"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
        <h2>Grade 9 Rep</h2>
        <div className={styles.sectionContainer}>
          {candidates.data
            .filter(
              (candidate) =>
                candidate.attributes.validated === true &&
                candidate.attributes.position === "9"
            )
            .map((candidate) => (
              <Candidate key={candidate.id} candidate={candidate.attributes} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Candidates;
