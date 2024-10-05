import lottery from "../../../src/assets/icons/target.png";
import wingo from "../../../src/assets/images/wingo.png";
import k3 from "../../../src/assets/images/k3.png";
import fived from "../../../src/assets/images/5d.png";
import Button from "../../../src/assets/icons/previous.png";
import { Link } from "react-router-dom";
import React from "react";

function LotteryGamesSection() {
  return (
    <div>
      <div className="sectionTitle">
        <div className="rightside">
          <img className="" src={lottery} alt="" />{" "}
          <p className="sectionPTitle">Lottery Games</p>
        </div>
        <div className="moveButtons">
          <img className="backButton" src={Button} alt="" />
          <img src={Button} alt="" className="forwardButton" />
        </div>
      </div>
      <div className="gamesContainer">
        <Link to={"/wingogame"}>
          <div className="gameContainer">
            <img src={wingo} alt="" srcset="" />
          </div>
        </Link>
        <div className="gameContainer">
          <img src={k3} alt="" srcset="" />
        </div>{" "}
        <div className="gameContainer">
          <img src={fived} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default LotteryGamesSection;
