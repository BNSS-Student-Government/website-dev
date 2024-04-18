import React, { useState } from "react";
import { VscChecklist } from "react-icons/vsc";

const SecureVote = () => {
  const [stage, setStage] = useState(0);

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
      Voting portal will open on voting day. Your teacher will give you
      instructions!
    </div>
  );
};

export default SecureVote;
