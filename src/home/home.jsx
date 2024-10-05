import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/home.css";
import houseImage from "../../src/assets/icons/house.png";
import activityImage from "../../src/assets/icons/online-shopping.png";
import wallet from "../../src/assets/icons/wallet.png";
import account from "../../src/assets/icons/user.png";
import joystick from "../../src/assets/icons/joystick.png";
import referandearn from "../../src/assets/images/referearn.jpeg";
import promo from "../../src/assets/images/promo.jpg";
import luckywinner from "../../src/assets/images/luckywinner.jpg";
import NavContainer from "./components/secondarynav";
import SocialActions from "./components/socialActions";
import LotteryGamesSection from "./components/lotterygames_section";
import OriginalGamesSection from "./components/originalgames";
import MarginComp from "./components/margin";
import AboutUs from "./components/aboutus";
import { Link } from "react-router-dom";
import WinningCarousel from "./components/winning_competition";
const HomePage = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-left">X2FACTOR</div>
        <div className="navbar-right">
          <button className="primary-button">Register</button>
          <div className="link">Sign in</div>
        </div>
      </nav>
      {/* <div className="margin"></div> */}
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={true}
          infiniteLoop
          //   useKeyboardArrows
          autoPlay
        >
          <div>
            <img className="carouselimg" src={promo} alt="slide 1" />
          </div>
          <div>
            <img className="carouselimg" src={referandearn} alt="slide 2" />
          </div>
          <div>
            <img className="carouselimg" src={luckywinner} alt="slide 3" />
          </div>
        </Carousel>
      </div>
      <NavContainer />
      <SocialActions />
      <LotteryGamesSection />
      <OriginalGamesSection />
      <WinningCarousel />
      <AboutUs />
      <MarginComp />
      <nav className="bottom-nav">
        <div className="bottom-nav-item">
          <div className="icon">
            <img className="icon" src={houseImage} alt="" />
          </div>
          <div className="label">Home</div>
        </div>
        <div className="bottom-nav-item">
          <div className="icon">
            <img className="icon greyscale" src={activityImage} alt="" />
          </div>
          <div className="label">Activity</div>
        </div>
        <div className="bottom-nav-item elevated">
          <div className="icon">
            <img className="icon" src={joystick} alt="" />
          </div>
        </div>
        <div className="bottom-nav-item">
          <div className="icon">
            <img className="icon greyscale" src={wallet} alt="" />
          </div>
          <div className="label">Wallets</div>
        </div>
        <Link to={"/auth"}>
          <div className="bottom-nav-item">
            <div className="icon">
              <img className="icon greyscale" src={account} alt="" />
            </div>
            <div className="label">Account</div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
