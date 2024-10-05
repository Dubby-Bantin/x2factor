import React from "react";

import { useMemo } from "react";
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
import Countdown from "./gamecountdown";

function GameDetails({ gameTitle, setGameTimeLeft, togglePopup }) {
  console.log("this is the time", gameTitle);
  const last5games = [0, 4, 3, 2, 1];
  const timeData = useMemo(() => parseWingoTime(gameTitle), [gameTitle]);

  return (
    <div className="gameDetailsContainer">
      <div className="sections">
        <div className="ticketSection1">
          <div>
            <button className="howtoplay" onClick={togglePopup}>
              How to play
            </button>
          </div>
          <p className="gameTitle">{gameTitle}</p>
          <div className="lastGames">
            {last5games.map((game, i) => {
              return <img key={i} src={getNumberImage(game)}></img>;
            })}
          </div>
        </div>
        <div className="verticalLine"></div>
        <div className="ticketSection2">
          <p className="timeRemaining">Time Remaining</p>
          <Countdown
            key={gameTitle}
            initialMinutes={timeData.durationInMinutes}
            initialSeconds={timeData.durationInSeconds}
            setGameTimeLeft={setGameTimeLeft}
            totalSeconds={timeData.totalSeconds}
          />
          <p className="gameId">20123409092</p>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;

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

function parseWingoTime(input) {
  // Split the input into the word and the time part
  const [word, timePart] = input.split(" ");
  console.log("this was the input", input);

  // Extract the numeric value and the time unit (M for minutes, s for seconds)
  const timeValue = parseInt(timePart.slice(0, -1), 10); // Extract number part
  const timeUnit = timePart.slice(-1); // Extract unit (M or s)

  // Initialize variables to store the duration in seconds and minutes
  let durationInSeconds;
  let durationInMinutes;

  if (timeUnit.toLowerCase() === "m") {
    durationInSeconds = 60; // Convert minutes to seconds (start at 60)
    durationInMinutes = timeValue - 1; // Subtract 1 to account for the initial seconds
  } else if (timeUnit.toLowerCase() === "s") {
    durationInSeconds = timeValue; // Already in seconds
    durationInMinutes = 0; // No minutes
  } else {
    throw new Error("Invalid time format");
  }

  // Calculate total seconds
  const totalSeconds = durationInMinutes * 60 + durationInSeconds;

  return {
    word,
    durationInSeconds,
    durationInMinutes,
    totalSeconds, // Return the total seconds
  };
}
