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


const Settings = () => {

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
<div href="settings" className="settings_content ">
<div className='left_settings_nav'>
 <ul>
   <li className={toggleSettingsTab === 1 ? "activeLinkTab" : "inactiveTab"} onClick={() => initSettingsTab(1)}>Profile</li>
   <li className={toggleSettingsTab === 2 ? "activeLinkTab" : "inactiveTab"} onClick={() => initSettingsTab(2)}>Account</li>
   <li>Notifications</li>
 </ul>
</div>

<div className="wrap">
<div className={toggleSettingsTab === 1 ? "profile_content  active_item" : "profile_content" }>
   <div className='cont center'>
     <h2>Profile picture</h2>
     <div className='dropbox'>
       <input type='file' className='file_input' name='profile_pic' accept="image/*"></input>
       <p>Drop an image or click to upload it.</p>
     </div>
     <div className='profile_pic_container'>
       <img src='https://uep.edu.pl/wp-content/uploads/2021/10/Jujutsu-Kaisen-Rozdzial-163-spoilery-data-premiery-przeczytaj-mange-online.jpg' alt='profile picture' />
     </div>
   </div>
   <div className='cont center'>
     <h2>Banner</h2>
     <div className='dropbox'>
       <input type='file' className='file_input' name='bg_pic' accept="image/*"></input>
       <p>Drop an image or click to upload it.</p>
     </div>
     <div className='bg_pic_container'>
       <img src='https://shivsaga.com/wp-content/uploads/2022/07/call-of-the-night-anime-2022.jpg' alt='bg_pic' />
     </div>
   </div>
</div>


<div className={toggleSettingsTab === 2 ? "account_content  active_item" : "profile_content" }>
   <div className='cont'>
     <h2>UserName:</h2>
     <div className="prof_input">
     <input type="text" name="username" className='input_inner' placeholder='UserName'></input>
     </div>
   </div>

   <div className='cont'>
     <h2>Email:</h2>
     <div className="prof_input">
     <input type="email" name="email" className='input_inner' placeholder='E-mail'></input>
     </div>
   </div>

   <div style={{marginBottom:15}}className='cont'>
     <h2>Change password:</h2>
     <div className="prof_input">
     <input type="password" name="password" className='input_inner' placeholder='Current password'></input>
     </div>
   </div>
   <div style={{marginBottom:15}}className='cont'>
     <div className="prof_input">
     <input type="new password" name="password" className='input_inner' placeholder='New password'></input>
     </div>
   </div>
 
</div>
</div>
</div>
);
}
export default Settings;