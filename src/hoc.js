import React from "react";
import A from "./components/A";
import B from "./components/B";
// import A from "./components/A";
// import B from "./components/B";

function Hoc() {
  return (
    <div>
      <h1>Auction</h1>
      <A />
      <B />
    </div>
  );
}

export default Hoc;
