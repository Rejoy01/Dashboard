import React from "react";
import "./Home.css";
import BreifCase from "../img/Briefcase.png";
import StatBoard from "../img/StatBoard.png";
import Logo from "../components/logo/Logo";
import Menu from "../components/menu/Menu";
import Shutdown from "../img/Shutdown.png";
import Header from "../components/Nav/Header";
import Dashboard from "../components/Dashboard/Dashboard";

const Home = () => {
  return (
    <div className="home">
      <div className="left-side">
        <Logo />
        <div className="menu-bars">
          <Menu />
        </div>
      </div>
      <div className="right-side">
        <Header />
        <Dashboard />

      </div>

      <div className="log">
        <button className="Logout">
          <span>Logout</span>
          <img src={Shutdown} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
