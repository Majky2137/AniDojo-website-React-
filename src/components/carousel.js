import React from 'react';
import '../App.css';
import './carousel.css';
import {motion} from 'framer-motion';
import {useRef, useState, useEffect} from 'react';
import images from './images';






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
                {images[1].map((item) => {
                    return(
                        <motion.div  className='item' key={item.id}>
                <img src={item.mainimage} alt="cannot display"/>
                <div className='title'>{item.title}</div>
                </motion.div>
                );
                })}
       </motion.div>
    </motion.div>
    </motion.div>
  );
}

export default Slider;