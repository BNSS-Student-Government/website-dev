import React from "react";
import styles from "./Article.module.css";

const Article = ({ title, paragraph, children, width }) => {
  const w = width ? width : "200px";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: w,
        maxWidth: w,
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ aspectRatio: 1, width: "40%", marginBottom: "0.4rem" }}>
        {children}
      </div>
      <h2 style={{ marginBottom: 3, marginTop: 0 }}>{title}</h2>
      <p
        style={{
          marginTop: 0,
          fontFamily: "helvetica",
          fontWeight: "100",
          fontSize: "1.1rem",
        }}
      >
        {paragraph}
      </p>
    </div>
  );
};

export default Article;
