import React, { useEffect, useState } from 'react'
import Sidebarbutton from './sidebarButton.js'
import './slidebar.css'
import { CgFeed, CgHeart, CgTrending, CgPlayButton, CgAlbum, CgArrowRightR } from "react-icons/cg";
import apiClient from '../../spotify.js';


export default function Slidebar() {
  const [profileImage, setProfileImage] = useState("https://i.pinimg.com/originals/66/7b/57/667b577b300d0ace5aba492b82b36be2.jpg")
  useEffect(()=>{
    apiClient.get("me").then((res)=>{
      setProfileImage(res.data.images[0].url)
    })
  },[])

  return (
    <div className='slider-container'>
      <div className='img-container'>
      <img 
      src={profileImage}
      className='profile-img'
      alt='profile img'
      />
      </div> 
      <div className='nav-buttons'>
        <Sidebarbutton title='Feed' to='/feed' icon={<CgFeed className='icon-btn'/>}/>
        <Sidebarbutton title='Trending' to='/trending' icon={<CgTrending className='icon-btn'/>}/>
        <Sidebarbutton title='Player' to='/player' icon={<CgPlayButton className='icon-btn'/>}/>
        <Sidebarbutton title='Favorites' to='/favorites' icon={<CgHeart className='icon-btn'/>}/>
        <Sidebarbutton title='Library' to="/" icon={<CgAlbum className='icon-btn'/>}/>
      </div>
      <div>
        <Sidebarbutton title='SingOut' to='' icon={<CgArrowRightR className='icon-btn'/>}/>
      </div>
    </div>
  )
}
