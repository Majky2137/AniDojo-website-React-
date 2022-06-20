import React from 'react';
import '../App.css';
import './Hero.css';
import Slider from './carousel';
import NavBar from './Navbar/navbar';
import { Button } from './Button';

function Hero() {
  return (
    <div className='hero-container'>
      <div className='bg2'/>
        <img className="bg" src="https://images2.alphacoders.com/118/1185030.jpg" alt="bg"></img>
        <NavBar/>
        <div className='Items'>
        <div className='text_container'>
      <h1>FIND YOUR FAVORITE</h1>
      
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
      <button className={`btn btn--medium btn--primary`}>Explore</button>
      </div>
      <div className='container_s'>
      <Slider/>
      </div>
    
      </div>
     
    </div>
  );
}

export default Hero;