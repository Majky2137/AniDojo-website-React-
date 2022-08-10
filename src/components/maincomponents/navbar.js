import React, {useState, useEffect} from 'react';
import '../css/navbar.css';
import { Button } from '../Button';
import {NavLink} from 'react-router-dom';




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
            <li className='nav-item'>
                <NavLink to='/search' className='nav-links'  onClick={CloseMenuclick}>
                    Search
                 </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/manga' className='nav-links'   onClick={CloseMenuclick}>
                    Manga List
                 </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/forum'  className='nav-links' onClick={CloseMenuclick}>
                    Forum
                 </NavLink>
            </li>
        </ul>
    
        
       
        </div>
    </nav>
  )
}

export default NavBar;
