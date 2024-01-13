import React from "react";
import "./Header.css";
import ProfileImg from "../../img/Rectangle10.png";

const Header = () => {
  return (
    <div className="Header">
      <span>Good Morning !</span>
      <div className="profile">
        <div className="details">
          <span style={{fontSize:"16px"}}>John Doe</span>
          <span style={{fontSize:"10px"}}>john@doe.com</span>
        </div>

        <div className="img">
          <img src={ProfileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
