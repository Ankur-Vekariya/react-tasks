import React, { useState } from "react";
import UpdatedComponent from "./HOC";

function A({ money, handleIncrease }) {
//   const [money, setMoney] = useState(10);
//   const handleIncrease = () => {
//     setMoney(money * 10);
//   };
  return (
    <div>
      <h1>jimmy's offer {money}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default UpdatedComponent(A);
