import React from 'react';
import '../App.css';
import './Hero.css';
import Slider from './carousel';

function Hero() {
  return (
    <div className='hero-container'>
 
        <div className='Items'>
        <div className='bg2'/>
        <img className="bg" src="https://i.ibb.co/nj050jN/Jujutsu-Kaisen-006.png" alt="bg"></img>
       
        <div className='text_container'>
      <h1>FIND YOUR FAVORITE</h1>
      <p>We can help you!</p>
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
      </div>
      
     <div className='container_s'>
      <Slider/>
      </div>
      </div>
     
    </div>
  );
}

export default Hero;