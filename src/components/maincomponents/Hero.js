import React from 'react';
import '../../App.css';
import '../css/Hero.css';
import Slider from '../carousel';
import NavBar from './navbar';
import { useState, useEffect} from "react";
import { Link, NavLink } from 'react-router-dom';
import manga_base from '../.././data/mangabase'
import mainbase from '../.././data/anibase'
import LoadData from '../loadData';

const Hero = () => {
  const [data, setData] = useState([]);
  const getData = (async() => { const data = await LoadData('Home');  setData(data); });

  useEffect(() => {
      getData();
  }, []);



  return (
    <div className='hero-container'>
      <div className='bg2'/>
        <img className="bg" src="https://i.pinimg.com/originals/fd/ea/8b/fdea8b349bd204f911d7a8cc22058f14.jpg" alt="bg"></img>
        <NavBar/>
        <div className='Items'>
        <div className='text_container'>
      <h1>Welcome to <span>Ani</span>DOJO</h1>
      <NavLink to='/search'><button className={`btn btn--medium btn--primary`}>Explore</button></NavLink>
      </div>
      <div className='container_s'>
      <div className='header-title-info'>
                  <p>Trending</p>
      </div>
      <div className='results'>
              {data.map((item) => {
                    return(
        <Link className='card' key={item.id} to={`anime/${item.id}`} state={item}>        
       <div className='overlay '></div>
      <img src={item.cover} alt="cannot display"/>
     <div className='info'>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      </div>
   </Link>  
 );
 })}
 
  </div>
  <div className='header-title-info'>
                  <p>Popular Manga</p>
  </div>
  <div className='manga'>
              {manga_base[0].map((item) => {
                    return(
    <div  className='card' key={item.id}>
       <div className='overlay'></div>
      <img src={item.mainimage} alt="cannot display"/>
     <div className='info'>
      <h3>{item.title}</h3>
      </div>
   </div>
 );
 })}
  </div>
      </div>
    
      </div>
     
    </div>
  );
}

export default Hero;