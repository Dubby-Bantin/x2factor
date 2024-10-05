import React from "react";
import "../../styles/popup.css"; // Import the CSS file for styling

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>How to Play</h2>
        <p>
          1 minutes 1 issue, 45 seconds to order, 15 seconds waiting for the
          draw. It opens all day. The total number of trade is 1440 issues.{" "}
          <br />
          <br /> If you spend 100 to trade, after deducting 2 service fee, your
          contract amount is 98: <br /> <br /> 1. Selectgreen: if the result
          shows 1,3,7.9 you will get (98*2) 196;if the result shows 5, you will
          get (98*1.5) 147 <br />
          <br /> 2.⁠ ⁠Selectred: if the result shows 2,4,6,8 you will get (98*2)
          196;if the result shows 0, you will get (98*1.5) 147 <br />
          <br /> 3.⁠ ⁠Selectviolet: if the result shows 0 or 5, you will
          get(98*4.5)441. <br />
          <br />
          4.⁠ ⁠Select number:if the result is the same as the number you
          selected, you will get (98*9) 882 <br /> 5.⁠ ⁠Select big: if the
          result shows 5,6,7,8,9 you will get (98 * 2) 196 <br />
          6.⁠ ⁠Select small: if the result shows 0, 1,2,3,4 you will get (98 *
          2) 196
        </p>
        <button className="close-popupbtn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
