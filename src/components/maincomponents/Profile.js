import React from 'react';
import {useState} from 'react';
import '../../App.css';
import '../css/UserProfile.css';
import NavBar from './navbar';
import ModalVideo from 'react-modal-video'
import { useLocation, useParams } from 'react-router-dom';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import mainbase from '../../data/anibase';
import manga_base from '../../data/mangabase';
import Profile_tabs from './profile_content_tabs';

function Profile() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const TopButtons = () => {
  const [notified,setNotified] = useState();
  const [got,setGot] = useState();

  return (
    <>
    <button className="bell" onClick={() => setNotified((isNotified) => !isNotified)}>
      <i class={notified ? "fa-regular fa-bell-slash" : " fa-solid fa-bell "}></i>
    </button>
    
    <button className="mail" onClick={() => setGot((isGot) => !isGot)}>
        <i class={got ? "fa-regular fa-envelope" : "fa-solid fa-envelope"}></i>
      </button>
      </>
  )
};


  return (
    <div className='profile_container'>
        <div className='navbar_left'>
        <div className='nav'>
          <ul>
            <li><i class="fa-solid fa-house"></i></li>
            <li><i class="fa-solid fa-list"></i></li>
            <li><i class="fa-solid fa-book-open"></i></li>
            <li><i class="fa-solid fa-users"></i></li>
          </ul>
        </div>
      </div>
        <div className='main_profile_wrapper'>
        <div className='navbar_top'>
         <div className='navbar_top_leftc'>
          <input style={{color:'#E3E3E3', fontSize:'12.5px'}} className='top_search' type="search " name="search-bar" placeholder='Type something...'></input>
         </div>
         <div className='navbar_top_rightc'>
          <div className='profile_data_wrapper'>
          <div className='profile_image_cont'>
            <img src='https://uep.edu.pl/wp-content/uploads/2021/10/Jujutsu-Kaisen-Rozdzial-163-spoilery-data-premiery-przeczytaj-mange-online.jpg' alt='profile_pic'/>
          </div>
          <p>UserName</p>
          <TopButtons/>
          </div>
         </div>
        </div>
      
        
            <div className='profile_header_banner'>
              <img src='https://shivsaga.com/wp-content/uploads/2022/07/call-of-the-night-anime-2022.jpg' alt='banner-img'/>
            </div>
            <div className='profile_content_wrapper'>
            <Profile_tabs/>
          </div>
          
        </div>
        <div className='profile_right_wrapper'>
            
          </div>
    </div>


  )
}

export default Profile;