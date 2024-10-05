import "./App.css";
import Preloader from "./home/components/preloader";
import HomePage from "./home/home";
import React from "react";

function App() {
  return (
    <div className="App">
      <Preloader text={"X2Factor"} />
      <HomePage />
    </div>
  );
}

export default App;
