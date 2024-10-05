import React from "react";
import { useState, useEffect } from "react";
function Multipliers({ initialMultiplier, randomSelect }) {
  const [highlighted, setHighlighted] = useState(initialMultiplier);

  useEffect(() => {
    setHighlighted(initialMultiplier);
  }, [initialMultiplier]);

  const multipliers = [1, 5, 10, 20, 50, 100];

  return (
    <div className="multiplierContainers">
      <button
        className="random"
        onClick={() => {
          randomSelect();
        }}
      >
        Random
      </button>
      {multipliers.map((multiplier) => (
        <button
          key={multiplier}
          className={`multipleButton ${
            highlighted === multiplier ? "mhighlighted" : ""
          }`}
          onClick={() => setHighlighted(multiplier)}
        >
          x{multiplier}
        </button>
      ))}
    </div>
  );
}

export default Multipliers;
