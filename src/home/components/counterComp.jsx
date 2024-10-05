// Counter.js
import React, { useState } from "react";
import "../../styles/counter.css";

const Counter = ({ color, increaseStake, count, setCount }) => {
  const increaseCount = () => {
    setCount(count + 1);
    increaseStake(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      increaseStake(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button
        className="counter-btn"
        style={{
          backgroundColor: color,
        }}
        onClick={() => {
          decreaseCount();
        }}
      >
        -
      </button>
      <span className="counter-value">{count}</span>
      <button
        className="counter-btn"
        style={{
          backgroundColor: color,
        }}
        onClick={increaseCount}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
