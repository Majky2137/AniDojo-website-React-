import React from 'react';
import {useState, useEffect} from 'react';
import '../../App.css';
import '../css/UserProfile.scss';
import ModalVideo from 'react-modal-video'
import { useLocation, useParams,  } from 'react-router-dom';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import Profile_tabs from './profile_content_tabs';
import LoadData from '../loadData';
import { Fav_button, SearchInput, TopButtons } from '../list_buttons';
import { NavLink} from 'react-router-dom';
import Settings from './settings';


function Profile() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [toggleState, setToggle] = useState(1);
  const [toggleSettingsTab, setToggleSettingsTab] = useState(1);
  const initTab = (index) => {
    setToggle(index);
  };
  const initSettingsTab = (index) => {
    setToggleSettingsTab(index);
  };

  
  const [username, setUsername] = useState('');

  const getUsername = async() => { const username = await LoadData('UserName'); setUsername(username); };

  useEffect(() => {
    if(username.length === 0) getUsername();
  }, []);

  return (
    <div className='profile_container'>
        <div className='main_profile_wrapper'>
            <div className='sidebar_wrapper'>
              <div className='sidebar_top'>
                <ul>
                  
                  <li>
                    <NavLink to={'/profile/' + username} className={toggleState === 1 ? "activeLink" : "inactive"} onClick={() => initTab(1)}>
                      <i class="fa-solid fa-house-user"></i>   
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to='#settings' className={toggleState === 2 ? "activeLink" : "inactive"} onClick={() => initTab(2)}>
                    <i class="fa-solid fa-sliders"></i>   
                    </NavLink>
                  </li>
                  
                </ul>
              </div>

              <div className='sidebar_bottom'>

              </div>
            </div>

        <div className={toggleState === 1 ? "main_content_container  active_item" : "main_content_container"}>
            <div className='profile_header_banner'>
            <div className='header_wrapper'>
              <div className='header_left_container'>
                <SearchInput/>
              </div>
              <div className='header_right_container'>
                <TopButtons/>
              </div>
            </div>
              <img src='https://shivsaga.com/wp-content/uploads/2022/07/call-of-the-night-anime-2022.jpg' alt='banner-img'/>
            </div>
            <Profile_tabs/>
        </div>

        <div className={toggleState === 2 ? "settings_wrap  active_item" : "main_content_container"}>
          <Settings/>
        </div>
        </div>
   
    </div>


  )
}

export default Profile;