import React from 'react'
import "./ProfileCard.css"
import ProfileImg from "../../img/media.png"
import Twitter from "../../img/twitter.png"
import FaceBook from "../../img/facebook.png"
import Instagram from "../../img/instagram.png"


const ProfileCard = () => {
  return (
    <div className='Profile-card'>
      <img src={ProfileImg} alt="" />
      <span><b>Jhon Doe</b></span>
      <span style={{color:"grey"}}>CEO</span>
      <div className='icons'>
            <img src={FaceBook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
      </div>
    </div>
  )
}

export default ProfileCard
