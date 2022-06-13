import React from 'react';
import '../App.css';
import './Content.css';
import {useRef, useState, useEffect} from 'react';
import images from './images';


function Content() {
  return (
    <div className='page_content'>
 <div className='header-title-info'>
                  <h3>Trending</h3>
                  <p className='sall'>See all</p>
                  </div>
                  
              <div className='trending'>
               
              {images.map((image) => {
                    return(
                        <div  className='card' key={image}>
                <img src={image} alt="cannot display"/>
                </div>
                );
                })}
              </div>
              
              <div className='header-title-info'>
                  <h3>Popular this season</h3>
                  <p className='sall'>See all</p>
                  </div>
                  
              <div className='trending'>
               
              {images.map((image) => {
                    return(
                        <div  className='card' key={image}>
                <img src={image} alt="cannot display"/>
                </div>
                );
                })}
              </div>

              <div className='header-title-info'>
                  <h3>upcoming next season</h3>
                  <p className='sall'>See all</p>
                  </div>
                  
              <div className='trending'>
               
              {images.map((image) => {
                    return(
                        <div  className='card' key={image}>
                <img src={image} alt="cannot display"/>
                </div>
                );
                })}
              </div>
              </div>
  );
}

export default Content;