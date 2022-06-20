import React, {useState, useEffect} from 'react';
import './navbar.css';
import { Button } from '../Button';
import {Link,NavLink, useLocation} from 'react-router-dom';

function NavBar() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleclick = () => setClick(!click);
const CloseMenuclick = () => setClick(false);

const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
 //assigning location variable
 const location = useLocation();

 //destructuring pathname from location
 const { pathname } = location;

 //Javascript split method to get the name of the path in array
 const splitLocation = pathname.split("/");
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <NavLink to="/" className='navbar-logo'>
                HXA <i className='fab fa-typo3'></i>
             </NavLink>
        <div className='menu-icon' onClick={handleclick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <NavLink exact  className='nav-links'  to='/' onClick={CloseMenuclick}>
                    Home
                 </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/List' className='nav-links'  onClick={CloseMenuclick}>
                    Search
                 </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/List' className='nav-links'   onClick={CloseMenuclick}>
                    Manga List
                 </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/List'  className='nav-links' onClick={CloseMenuclick}>
                    Forum
                 </NavLink>
            </li>
        </ul>
    
        
       
        </div>
    </nav>
  )
}

export default NavBar;
