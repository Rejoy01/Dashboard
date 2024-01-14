import React from 'react'
import "./ProfileCard.css"
import ProfileImg from "../../img/media.png"
import Twitter from "../../img/twitter.png"
import FaceBook from "../../img/facebook.png"
import ProfileImg from "../../img/media.png"


const ProfileCard = () => {
  return (
    <div className='Profile-card'>
      <img src={ProfileImg} alt="" />
      <span>Jhone Doe</span>
      <span>CEO</span>
      <div className='icons'>

      </div>
    </div>
  )
}

export default ProfileCard
