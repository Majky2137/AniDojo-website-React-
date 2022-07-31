import React from 'react';
import '../../App.css';
import '../css/Hero.css';
import Slider from '../carousel';
import NavBar from './navbar';

function Hero() {
  return (
    <div className='hero-container'>
      <div className='bg2'/>
        <img className="bg" src="https://i.pinimg.com/originals/fd/ea/8b/fdea8b349bd204f911d7a8cc22058f14.jpg" alt="bg"></img>
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