import React from 'react';
import '../App.css';
import './css/carousel.css';
import {motion} from 'framer-motion';
import {useRef, useState, useEffect} from 'react';
import mainbase from '../data/anibase';
import { Link } from 'react-router-dom';






function Slider() {
    const [width, setWidth] = useState(0);
    const slider = useRef();
    
    useEffect(() => {
      setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, []); 
  return (
    
    <motion.div className='container'>
      <div className='section_text_cont'>
      <h2>Check our newest series: </h2>
      </div>
    <motion.div ref={slider} className='carousel_container' whileTap={{cursor:"grabbing"}} >
        <motion.div  drag="x" dragConstraints={{right:0, left: -width }} className='carousel' >
                {mainbase[0].map((item) => {
                    return(
                        <motion.div  className='item' key={item.id}>
                              <Link  key={item.id} to="/anime" state={item}>  
                <img src={item.mainimage} alt="cannot display"/>
                <div className='title'>{item.title}</div>
                </Link>
                </motion.div>
                );
                })}
       </motion.div>
    </motion.div>
    </motion.div>
  );
}

export default Slider;