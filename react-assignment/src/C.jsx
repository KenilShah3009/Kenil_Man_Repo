import React from "react";
import { useSelector } from "react-redux";

const C = () => {
  const textData = useSelector((state) => state.text);

  return (
    <>
      <div
        style={{
          fontSize: "2.5rem",
          marginTop: "5%",
          fontFamily: "monospace",
        }}
      >
        <span style={{ fontFamily: "sans-serif" }}>Component C's div : </span>
        <span
          style={{
            display: "block",
            border: "2px solid white",
            borderRadius: "50px",
            padding: "1%",
            marginLeft: "2%",
          }}
        >
          {textData}
        </span>
      </div>
    </>
  );
};

export default C;
