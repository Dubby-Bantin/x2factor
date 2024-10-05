import React from "react";

import TopNavigation from "../../components/top_navigation";
import WalletBalance from "../../components/walletBalance";
import DurationSelect from "./durationSelect";
import { useState } from "react";
import GameDetails from "./gamedetails";
import GameChoices from "./gamechoices";
import BottomNavigation from "./bottomNavigation";
import BottomSheet from "../../components/bottomsheet";
import Leaderboard from "./leaderboard";
import Popup from "../../components/popupComponent";
function WingoGame() {
  const [game, setGame] = useState("wingo 30S");
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const [bottomSheetData, setBottomSheetData] = useState({
    color: "#17B660",
    game: game,
    selected: "",
  });
  const [gameTimeLeft, setGameTimeLeft] = useState(100);
  // Function to handle the click event and increment the counter
  const setGameHandler = (newGame) => {
    setGame(newGame);
    setBottomSheetData((prevData) => {
      console.log(prevData);
      return { ...prevData, game: newGame };
    });
  };
  return (
    <div className="gamecontainer">
      <TopNavigation />
      <WalletBalance />
      <DurationSelect game={game} selectGame={setGameHandler} />
      <GameDetails
        gameTitle={game}
        setGameTimeLeft={setGameTimeLeft}
        togglePopup={togglePopup}
      />
      <GameChoices
        gameTimeLeft={gameTimeLeft}
        currentGame={game}
        showBottomSheet={() => {
          setBottomSheetOpen(true);
        }}
        setBottomSheetData={setBottomSheetData}
      />
      <BottomNavigation />
      {isPopupOpen && <Popup onClose={togglePopup} />}
      <Leaderboard />
      <BottomSheet
        isOpen={bottomSheetOpen}
        data={bottomSheetData}
        children={<div></div>}
        onClose={() => {
          setBottomSheetOpen(false);
        }}
      />
    </div>
  );
}

export default WingoGame;
