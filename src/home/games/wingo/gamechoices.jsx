import React from "react";

import n0 from "../../../assets/icons/n0.png";
import n1 from "../../../assets/icons/n1.png";
import n2 from "../../../assets/icons/n2.png";
import n3 from "../../../assets/icons/n3.png";
import n4 from "../../../assets/icons/n4.png";
import n5 from "../../../assets/icons/n5.png";
import n6 from "../../../assets/icons/n6.png";
import n7 from "../../../assets/icons/n7.png";
import n8 from "../../../assets/icons/n8.png";
import n9 from "../../../assets/icons/n9.png";
import { useState } from "react";
import Multipliers from "./multiplier";
import BigOrSmall from "./bigorsmall";
function GameChoices({
  showBottomSheet,
  setBottomSheetData,
  currentGame,
  gameTimeLeft,
}) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [highlighted, setHighlighted] = useState(null);
  const selectRandomNumber = () => {
    let index = 0;
    const interval = setInterval(() => {
      setHighlighted(numbers[index]);
      index = (index + 1) % numbers.length;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomIndex = Math.floor(Math.random() * numbers.length);
      setHighlighted(numbers[randomIndex]);
    }, 2000);
  };
  return (
    <div className="gameChoice">
      {gameTimeLeft <= 5 && (
        <div className="overlayCountdown">{gameTimeLeft}</div>
      )}

      <div className="numberChoices">
        <button
          className="greenButton"
          onClick={() => {
            showBottomSheet();
            setBottomSheetData({
              game: currentGame,
              color: "#17B660",
              selected: "green color",
            });
          }}
        >
          Green
        </button>
        <button
          className="violetButton"
          onClick={() => {
            showBottomSheet();
            setBottomSheetData({
              game: currentGame,
              color: "#c86eff",
              selected: "violet color",
            });
          }}
        >
          Violet
        </button>
        <button
          className="redButton"
          onClick={() => {
            showBottomSheet();
            setBottomSheetData({
              game: currentGame,
              selected: "red color",
              color: "#fb5b5b",
            });
          }}
        >
          Red
        </button>
      </div>
      <div className="numbers">
        {numbers.map((game, i) => {
          return (
            <img
              key={i}
              onClick={() => {
                showBottomSheet();
                if (game !== 0 && game !== 5 && game % 2 === 0) {
                  setBottomSheetData({
                    game: currentGame,
                    selected: `number ${game}`,
                    color: "#fb5b5b",
                  });
                } else if (game === 0 || game === 5) {
                  setBottomSheetData({
                    game: currentGame,
                    selected: `number ${game}`,
                    color: "#c86eff",
                  });
                } else {
                  setBottomSheetData({
                    game: currentGame,
                    selected: `number ${game}`,
                    color: "#17B660",
                  });
                }
              }}
              src={getNumberImage(game)}
              className={`selectNumber ${
                highlighted === game ? "highlighted" : ""
              }`}
              alt={`number-${game}`}
            ></img>
          );
        })}
      </div>
      <Multipliers initialMultiplier={1} randomSelect={selectRandomNumber} />
      <BigOrSmall
        showBottomSheet={(color, value) => {
          showBottomSheet();
          setBottomSheetData({
            game: currentGame,
            selected: value,
            color: color,
          });
        }}
      />
    </div>
  );
}

export default GameChoices;

const getNumberImage = (num) => {
  switch (num) {
    case 0:
      return n0;
    case 1:
      return n1;
    case 2:
      return n2;
    case 3:
      return n3;
    case 4:
      return n4;
    case 5:
      return n5;
    case 6:
      return n6;
    case 7:
      return n7;
    case 8:
      return n8;
    case 9:
      return n9;
    default:
      return null; // or a default image if you prefer
  }
};
