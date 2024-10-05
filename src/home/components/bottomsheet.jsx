import React, { useState, useEffect } from "react";
import "../../styles/bottomsheet.css";
import Counter from "./counterComp";

const BottomSheet = ({ isOpen, onClose, children, data }) => {
  const [stake, setStake] = useState(100);
  const [selectedPrice, setSelectedPrice] = useState(100);
  const [counterValue, setCounterValue] = useState(1);
  const prices = [100, 1000, 10000, 100000];
  const multipliers = [1, 5, 10, 20, 50, 100];
  const [selectedMultiplier, setSelectedMultiplier] = useState(1);
  useEffect(() => {
    if (selectedPrice !== null) {
      setStake(selectedPrice * counterValue * selectedMultiplier);
    }
  }, [selectedPrice, counterValue, selectedMultiplier]);

  return (
    <div className={`bottom-sheet ${isOpen ? "open" : ""}`}>
      <div className="bottom-sheet-content">
        <div
          className="gameNameContainer"
          style={{
            backgroundColor: data.color,
          }}
        >
          <p className="gameName">{data.game}</p>
          <div className="select">
            <p className="">You selected {data.selected}</p>
          </div>
        </div>
        <div className="balanceContainer">
          <p>Balance</p>
          <div className="prices">
            {prices.map((price, index) => (
              <div
                key={index}
                className={`price`}
                style={{
                  backgroundColor: selectedPrice === price ? data.color : "",
                }}
                onClick={() => {
                  setSelectedPrice(price);
                }}
              >
                {price}
              </div>
            ))}
          </div>
        </div>
        <div className="quantity">
          <p>Quantity</p>
          <Counter
            color={data.color}
            increaseStake={() => setStake(selectedPrice * counterValue)}
            count={counterValue}
            setCount={setCounterValue}
          />
        </div>
        <div className="multipliers">
          {multipliers.map((multiple, index) => (
            <div
              className="multiple"
              key={index}
              style={{
                backgroundColor:
                  selectedMultiplier === multiple ? data.color : "",
              }}
              onClick={() => {
                setSelectedMultiplier(multiple);
              }}
            >
              X{multiple}
            </div>
          ))}
        </div>
        <div className="bottomsheetButtons">
          <button className="close-btn" onClick={onClose}>
            Cancel
          </button>
          <button
            className="totalAmount"
            style={{
              backgroundColor: data.color,
            }}
          >
            Total Amount ₦<span className="amount">{stake}.00</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
