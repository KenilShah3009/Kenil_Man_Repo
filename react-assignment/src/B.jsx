import React from "react";
import { useDispatch } from "react-redux";

const B = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({ type: "update", payload: e.target.value });
  };
  return (
    <>
      <label style={{ fontSize: "2.5rem" }} htmlFor={"text"}>
        Component B's Input Field :{" "}
      </label>
      <input
        style={{ fontSize: "2.5rem" }}
        type={"text"}
        onChange={handleChange}
      />
    </>
  );
};

export default B;
