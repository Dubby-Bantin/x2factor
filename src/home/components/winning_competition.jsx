import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import wingo from "../../../src/assets/images/wingo.png";
import aviator from "../../../src/assets/images/aviator.png";
import k3 from "../../../src/assets/images/k3.png";
import fived from "../../../src/assets/images/5d.png";
import Button from "../../../src/assets/icons/previous.png";
const winningData = [
  { id: 1, name: "John Doe", amount: "$200", gamePlayed: "wingo" },
  { id: 2, name: "Jane Smith", amount: "$150", gamePlayed: "k3" },
  { id: 3, name: "Sam Johnson", amount: "$300", gamePlayed: "aviator" },
  { id: 4, name: "Chris Lee", amount: "$100", gamePlayed: "5d" },
  { id: 5, name: "Alex Brown", amount: "$250", gamePlayed: "aviator" },
  { id: 6, name: "Laura Adams", amount: "$180", gamePlayed: "wingo" },
  { id: 7, name: "Michael Clark", amount: "$220", gamePlayed: "k3" },
];

const WinningCarousel = () => {
  const [items, setItems] = useState(winningData);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastIndex = items.length - 1;
      const lastItem = itemRefs.current[lastIndex];

      gsap.to(lastItem, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          const newItems = [items[lastIndex], ...items.slice(0, lastIndex)];
          setItems(newItems);
          gsap.fromTo(
            itemRefs.current[0],
            { opacity: 0 },
            { opacity: 1, duration: 1 }
          );
        },
      });
    }, 3000); // Change item every 3 seconds

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div>
      <div className="sectionTitle">
        <div className="rightside">
          <p className="sectionPTitle">Winning Information</p>
        </div>
      </div>
      <div
        ref={containerRef}
        style={{ height: "550px", overflow: "hidden", position: "relative" }}
      >
        {items.slice(0, 5).map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[idx] = el)}
            className="winner"
            style={
              {
                //   position: "relative",
                //   top: 0,
                //   left: 0,
                //   width: "100%",
                //   display: "flex",
                //   justifyContent: "space-between",
                //   padding: "10px",
                //   borderBottom: "1px solid #ccc",
                //   opacity: 1, // Start with opacity 1
              }
            }
          >
            <div className="winnerName">
              <span>{item.name}</span>
            </div>
            <img className="gamewon" src={gameplayed(item.gamePlayed)} alt="" />
            <div className="amountwon">
              <div>Recieved {item.amount}</div>
              <div className="greyfade">winning amount</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinningCarousel;
function gameplayed(theGameThatWasPlayed) {
  switch (theGameThatWasPlayed) {
    case "k3":
      return k3;
      break;
    case "wingo":
      return wingo;
    case "5d":
      return fived;
    case "aviator":
      return aviator;
    default:
      return wingo;
      break;
  }
}
