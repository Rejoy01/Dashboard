import React from "react";
import BreifCase from "../../img/Briefcase.png"
import StatBoard from "../../img/StatBoard.png"
import "./logo.css"

const Logo = () => {
  return (
    <div className="Logo">
      <img src={BreifCase} alt="" />
      <img src={StatBoard} alt="" />
    </div>
  );
};

export default Logo;
