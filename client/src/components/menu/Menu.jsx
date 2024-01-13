import React from 'react'
import "./Menu.css"
import CircledMenu from "../../img/CircledMenu.png"
import Support from "../../img/Support.png"
import Puzzle from "../../img/Puzzle.png"
import Help from "../../img/Help.png"

const Menu = () => {
  return (
    <div className='Main'>
      <div className="sub">
        <img src={CircledMenu} alt="" />
        <span>DashBoard</span>
      </div>
      <div className="sub">
        <img src={Support} alt="" />
        <span>Support</span>
      </div>
      <div className="sub">
        <img src={Puzzle} alt="" />
        <span>Plugins</span>
      </div>
      <div className="sub">
        <img src={Help} alt="" />
        <span>Help</span>
      </div>
    </div>
  )
}

export default Menu
