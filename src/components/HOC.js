import React, { useState } from "react";

function UpdatedComponent(OrignalComponent) {
  function NewComponent() {
    const [money, setMoney] = useState(10);
    const handleIncrease = () => {
      setMoney(money * 10);
    };
    return <OrignalComponent handleIncrease={handleIncrease} money={money} />;
  }
  return NewComponent;
}

export default UpdatedComponent;
