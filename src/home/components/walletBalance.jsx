import wallet from "../../assets/icons/wallet.png";
import "../../styles/wingogame.css";
import React from "react";

function WalletBalance() {
  return (
    <div className="wallet">
      <p className="balance">₦0.00</p>
      <div className="balanceName">
        <img src={wallet} alt="" className="walletpng" /> wallet balance
      </div>
      <div className="actionButtons">
        <button className="withdraw">Withdraw</button>
        <button className="deposit">Deposit</button>
      </div>
    </div>
  );
}

export default WalletBalance;
