import crown from "../../../src/assets/icons/crown.png";
import wingo3 from "../../../src/assets/images/wingo3.png";
import aviator from "../../../src/assets/images/aviator.png";
import horseracing from "../../../src/assets/images/horseracing.png";
import Button from "../../../src/assets/icons/previous.png";
import React from "react";

function OriginalGamesSection() {
  return (
    <div>
      <div className="sectionTitle">
        <div className="rightside">
          <img className="" src={crown} alt="" />{" "}
          <p className="sectionPTitle">Originals</p>
        </div>
        <div className="moveButtons">
          <img className="backButton" src={Button} alt="" />
          <img src={Button} alt="" className="forwardButton" />
        </div>
      </div>
      <div className="gamesContainer">
        <div className="gameContainer">
          <img src={wingo3} alt="" srcset="" />
        </div>
        <div className="gameContainer">
          <img src={aviator} alt="" srcset="" />
        </div>{" "}
        <div className="gameContainer">
          <img src={horseracing} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default OriginalGamesSection;
