import trophyImg from "../../assets/images/trophy.webp";
import money from "../../assets/images/3dmoney.webp";
import React from "react";

function SocialActions() {
  return (
    <div className="socialActionsContainer">
      <div className="mainSoc">
        <div className="trophy">
          <img className="imgfile" src={trophyImg} alt="trophy" />
        </div>
        <p className="titleT">Activity</p>
        <p className="secTitle">Rich reward activities.</p>
      </div>
      <div className="mainSoc">
        <div className="dmoney">
          <img className="imgfile" src={money} alt="3d money" />
        </div>
        <p className="titleT">Invite</p>
        <p className="secTitle">Invite your Friends to earn huge rewards.</p>
      </div>
    </div>
  );
}

export default SocialActions;
