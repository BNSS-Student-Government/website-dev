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
        overflowWrap: "break-word",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
      className={styles.article}
    >
      <div style={{ aspectRatio: 1, width: "40%" }}>{children}</div>
      <h2 style={{ marginBottom: 5, marginTop: 10 }}>{title}</h2>
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
