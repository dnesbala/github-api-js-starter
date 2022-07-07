import React, { useState } from "react";
import "../styles/Counter.css";

const Counter = () => {
  //   const value = useState(0);
  //   console.log(value);
  //   const counterValue = value[0];
  //   const setCounterValue = value[1];

  const [counterValue, setCounterValue] = useState(0);
  console.log(counterValue);

  const handleDecrement = () => {
    if (counterValue > 0) setCounterValue(counterValue - 1);
    // counterValue > 0 && setCounterValue(counterValue - 1);
  };
  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };
  const handleReset = () => {
    setCounterValue(0);
  };

  return (
    <div>
      <h3>Select product quantity</h3>
      <h4>{counterValue}</h4>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
