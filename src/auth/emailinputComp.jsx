import { SvgEmailComponent } from "../home/components/svgcomponents";
import React from "react";

function EmailInput() {
  return (
    <div>
      <div className="inputTitle">
        <SvgEmailComponent fill={"#508c9b"} /> Mail
      </div>
      <div>
        <input type="text" placeholder="please input your email" />
      </div>
    </div>
  );
}

export default EmailInput;
