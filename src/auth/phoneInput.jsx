import { SvgPhoneComponent } from "../home/components/svgcomponents";
import React from "react";

function PhoneInput() {
  return (
    <div>
      <div className="inputTitle">
        <SvgPhoneComponent fill={"#508c9b"} /> Phone
      </div>
      <div className="mainInput">
        <div className="telechoice">234</div>
        <input type="text" placeholder="please input your phone number" />
      </div>
    </div>
  );
}

export default PhoneInput;
