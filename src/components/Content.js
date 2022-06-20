import React from 'react';
import '../App.css';
import './Content.css';
import {useRef, useState, useEffect} from 'react';
import images from './images';
import popular from './images';


function Content() {
  return (
    
<div className='page_content'>
  <div className='header-title-info'>
                  <p>Trending</p>
  </div>
    <div className='results'>
              {images[0].map((item) => {
                    return(
    <div  className='card' key={item.id}>
       <div className='overlay'></div>
      <img src={item.mainimage} alt="cannot display"/>
     <div className='title'>{item.title}</div>
   </div>
 );
 })}
  </div>

  <div className='header-title-info'>
                  <p>Categories</p>
  </div>
  <div className='categories'>
    <div className='cat_item'></div>
    <div className='cat_item'></div>
    <div className='cat_item'></div>
    <div className='cat_item'></div>
    <div className='cat_item'></div>
    <div className='cat_item'></div>
    <div className='cat_item'></div>
  </div>
</div>
  );
}

export default Content;