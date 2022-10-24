import React from 'react';
import '../../App.css';
import '../css/Hero.scss';
import NavBar from './navbar';
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import LoadData from '../loadData';
import Background from './bg';
import HeroSlider from '../heroslider';

const Hero = () => {
  const [data, setData] = useState([]);
  const getData = async() => { const data = await LoadData('Home');  setData(data); };

  useEffect(() => {
      getData();
  }, []);



  return (
    <div className='hero-container'>
      <div className='bg2'/>
      <div className='bg1'/>
       <Background/>
        <NavBar/>
        <div className='Items'>
        <div className='text_container'>
      <h1>Welcome to <span>Ani</span>DOJO</h1>
      <Link to='/search'><button className={`btn btn--medium btn--primary`}>Explore</button></Link>
      </div>
      <div className='container_s'>
      <div style={{paddingLeft:0}} className='header-title-info'>
                  <p>Trending</p>
      </div>
      <HeroSlider/>
      </div>
      </div>
     
    </div>
  );
}

export default Hero;