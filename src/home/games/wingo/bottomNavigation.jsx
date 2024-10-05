import { useState } from "react";
import React from "react";

function BottomNavigation() {
  const [chosen, setChosen] = useState("gameHistory");
  return (
    <div className="bottomNavigation">
      <button
        className={`myHistory ${
          chosen === "gameHistory" && "chosenBNavigation"
        }`}
        onClick={() => {
          setChosen("gameHistory");
        }}
      >
        Game History
      </button>
      <button
        className={`myHistory ${chosen === "myHistory" && "chosenBNavigation"}`}
        onClick={() => {
          setChosen("myHistory");
        }}
      >
        My History
      </button>
    </div>
  );
}

export default BottomNavigation;
