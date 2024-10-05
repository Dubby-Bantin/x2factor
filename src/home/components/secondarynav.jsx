import React from "react";
import crown from "../../../src/assets/icons/crown.png";
import joystick from "../../../src/assets/icons/joystick.png";
import lottery from "../../../src/assets/icons/target.png";
import home from "../../../src/assets/icons/house.png";
import More from "../../../src/assets/icons/application.png";

const NavContainer = () => {
  return (
    <div className="nav-container">
      <div className="nav-item">
        <img src={home} alt="" />
        <p>Home</p>
      </div>
      <div className="nav-item">
        <img className="greyscale" src={lottery} alt="" />
        <p>Lottery</p>
      </div>
      <div className="nav-item">
        <img className="greyscale" src={crown} alt="" />
        <p>Originals</p>
      </div>
      <div className="nav-item">
        <img className="greyscale" src={joystick} alt="" />
        <p>Slots</p>
      </div>
      <div className="nav-item">
        <img className="greyscale" src={More} alt="" />
        <p>More</p>
      </div>
    </div>
  );
};

export default NavContainer;
