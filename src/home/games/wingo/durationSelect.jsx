import React from "react";

import time from "../../../assets/icons/time.png";
function DurationSelect({ game, selectGame }) {
  return (
    <div className="durationSelectContainer">
      <div
        className={`gameTime ${game === "wingo 30S" ? "selectedGame" : ""}`}
        onClick={() => {
          selectGame("wingo 30S");
        }}
      >
        <img src={time} className="timepng" alt="" />
        <p>
          Win go <br />
          30s
        </p>
      </div>
      <div
        className={`gameTime ${game === "wingo 1M" ? "selectedGame" : ""}`}
        onClick={() => {
          selectGame("wingo 1M");
        }}
      >
        <img src={time} className="timepng" alt="" />
        <p>
          Win go <br />
          1Min
        </p>
      </div>
      <div
        className={`gameTime ${game === "wingo 3M" ? "selectedGame" : ""}`}
        onClick={() => {
          selectGame("wingo 3M");
        }}
      >
        <img src={time} className="timepng" alt="" />
        <p>
          Win go <br />
          3Min
        </p>
      </div>
      <div
        className={`gameTime ${game === "wingo 5M" ? "selectedGame" : ""}`}
        onClick={() => {
          selectGame("wingo 5M");
        }}
      >
        <img src={time} className="timepng" alt="" />
        <p>
          Win go <br />
          5Min
        </p>
      </div>
    </div>
  );
}

export default DurationSelect;
