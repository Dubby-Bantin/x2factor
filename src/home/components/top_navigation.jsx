import {
  SvgBackButtonComponent,
  SvgCustomerServiceComponent,
  SvgNigerianFlagComponent,
} from "./svgcomponents";
import "../../styles/general.css";
import React from "react";

function TopNavigation() {
  return (
    <div className="topNavigation">
      <SvgBackButtonComponent />
      <div className="navbar-left">X2FACTOR</div>
      <div style={{ display: "flex" }}>
        <SvgCustomerServiceComponent fill={"#508c9b"} />
        <SvgNigerianFlagComponent />
      </div>
    </div>
  );
}

export default TopNavigation;
