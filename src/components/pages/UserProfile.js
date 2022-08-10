import React from 'react';
import '../../App.css'
import mainbase from '../../data/anibase';
import Profile from '../maincomponents/Profile';
import Footer from '../maincomponents/Footer';




function UserProfile() {
  document.body.style.overflow = "scroll"
  document.body.style.overflowX = "hidden"
  return (
      <>
      <Profile/>

      </>
  );
}

export default UserProfile;