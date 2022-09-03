import React, {useState, useEffect, useRef} from 'react';
import '../css/navbar.css';
import { Button } from '../Button';
import {NavLink} from 'react-router-dom';
import LoadData from '../loadData';



function NavBar() {
  
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const [username, setUsername] = useState('');

const handleclick = () => setClick(!click);
const CloseMenuclick = () => setClick(false);

const [click2, setClick2] = useState(false);
const handleclick2 = () => setClick2(!click);
const CloseMenuclick2 = () => setClick2(false);

const Menu = useRef(null)
const Menu2 = useRef(null)
const closeOpenMenus = (e)=>{
  //console.log(e, e.target, Menu.current && !Menu.current.contains(e.target), Menu.current, !Menu.current.contains(e.target), Menu.current.contains(e.target), click, click2);
  if(Menu.current && !Menu.current.contains(e.target) && (click)){
    setClick(false);
  }

  if(Menu2.current && !Menu2.current.contains(e.target) && (click2)){
    setClick2(false);
  }
};

const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const getUsername = async() => { const username = await LoadData('UserName'); setUsername(username); };

  useEffect(() => {
    if(username.length === 0) getUsername();
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  document.addEventListener('mousedown',closeOpenMenus);
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <NavLink to="/" className='navbar-logo'>
            <img  src="https://i.ibb.co/b5wVJ6q/logo.png"  style={{marginRight: 10}} width="35" height="35" alt="bg" /><span style={{fontFamily: 'Poppins'}}><span style={{color:'#BE4242'}}>ANI</span>DOJO</span>
             </NavLink>
        <div className='menu-icon' onClick={handleclick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <NavLink className='nav-links'  to='/' onClick={CloseMenuclick}>
                    Home
                 </NavLink>
            </li>
            <li className='nav-item dropdown' ref={Menu2} onClick={handleclick2}>
                    <span style={{cursor: 'pointer'}} className='nav-links'>Search</span>
                    <div class={click2 ? 'dropdown-content' : 'hidden'}>
                 <NavLink to='/search' style={{ textDecoration: 'none' }} className="dropdown_item"  onClick={CloseMenuclick2}>
                 <i class="fa-solid fa-film" onClick={CloseMenuclick2}></i><span>Anime</span>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} className="dropdown_item" to='/'  onClick={CloseMenuclick2}>
                <i class="fa-solid fa-book-open" onClick={CloseMenuclick2}></i><span>Manga</span>
                </NavLink>
                </div>
            </li>
            <li className='nav-item'>
                <NavLink to='/forum'  className='nav-links' onClick={CloseMenuclick}>
                    Forum
                 </NavLink>
            </li>
            {username.length === 0 ?
            <><li className='nav-item'>
              <NavLink to='/login' className='nav-links' onClick={CloseMenuclick}>
                Login
              </NavLink>
            </li><li className='nav-item'>
                <NavLink to='/register' className='nav-links' onClick={CloseMenuclick}>
                  Register
                </NavLink>
              </li></>
              :
              <li className='profile_image_cont nav-item dropdown' ref={Menu} onClick={handleclick}>
                <img src='https://uep.edu.pl/wp-content/uploads/2021/10/Jujutsu-Kaisen-Rozdzial-163-spoilery-data-premiery-przeczytaj-mange-online.jpg' alt='profile_pic'/>
                 <div class={click ? 'dropdown-content' : 'hidden'}>
                 <NavLink style={{ textDecoration: 'none' }} className="dropdown_item" to={'/profile/' + username}  onClick={CloseMenuclick}>
                 <i class="fa-solid fa-user" onClick={CloseMenuclick}></i><span>Profile</span>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} className="dropdown_item" to={'/profile/' + username}  onClick={CloseMenuclick}>
                <i class="fa-solid fa-envelope" onClick={CloseMenuclick}></i><span>Notifications</span>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} className="dropdown_item" to={'/profile/' + username}  onClick={CloseMenuclick}>
                <i class="fa-solid fa-wrench" onClick={CloseMenuclick}></i><span>Settings</span>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} className="dropdown_item" to={'/profile/' + username}  onClick={CloseMenuclick}>
                <i class="fa-solid fa-right-from-bracket" onClick={CloseMenuclick}></i><span>Logout</span>
                </NavLink>
                </div>
             
            </li>
            }

        </ul>
    
        
       
        </div>
    </nav>
  )
}

export default NavBar;
