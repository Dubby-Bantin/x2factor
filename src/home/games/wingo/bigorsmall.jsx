import React from "react";

function BigOrSmall({ showBottomSheet }) {
  return (
    <div className="bigorsmallcontainer">
      <button
        className="bigButton"
        onClick={() => {
          showBottomSheet("#FEAA57", "Big");
        }}
      >
        Big
      </button>
      <button
        className="smallButton"
        onClick={() => {
          showBottomSheet("#6FA8F4", "Small");
        }}
      >
        Small
      </button>
    </div>
  );
}

export default BigOrSmall;
