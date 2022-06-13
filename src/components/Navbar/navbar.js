import React, {useState, useEffect} from 'react';
import './navbar.css';
import { Button } from '../Button';
import {Link} from 'react-router-dom';

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
            <Link to="/" className='navbar-logo'>
                HXA <i className='fab fa-typo3'></i>
            </Link>
        <div className='menu-icon' onClick={handleclick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={CloseMenuclick}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/List' className='nav-links' onClick={CloseMenuclick}>
                    Find anime
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/login' className='nav-links-mobile' onClick={CloseMenuclick}>
                    Login
                </Link>
            </li>
            <li>
                <Link to='/sign-up' className='nav-links-mobile' onClick={CloseMenuclick}>
                    Register
                </Link>
            </li>
        </ul>
        {button && <Button  buttonSize='btn--large' buttonStyle='btn--outline'>Join Us</Button>}
        
       
        </div>
    </nav>
  )
}

export default NavBar;
