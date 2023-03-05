import "./A.css";
import B from "./B";
import C from "./C";
import { useReducer } from "react";

function App() {
  return (
    <div
      style={{
        border: "2px solid white",
        borderRadius: "40px",
        padding: "2%",
        width: "80%",
        margin: "auto",
      }}
    >
      <h1> Parent Component A</h1>
      <B />
      <C />
    </div>
  );
}

export default App;
