import React from "react";
import "./Home.css";
import BreifCase from "../img/Briefcase.png";
import StatBoard from "../img/StatBoard.png";
import Logo from "../components/logo/Logo";
import Menu from "../components/menu/Menu";
import Shutdown from "../img/Shutdown.png";

const Home = () => {
  return (
    <div className="home">
      <div className="left-side">
        <Logo />
        <div className="menu-bars">
          <Menu />
        </div>
        <button className="Logout">
          Logout
          <img src={Shutdown} alt="" />
        </button>
      </div>
      <div className="right-side">Dashboard aksbjgdhabs</div>
    </div>
  );
};

export default Home;
