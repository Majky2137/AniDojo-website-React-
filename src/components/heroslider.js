import React, { useState,useParams, useEffect, useRef  }from 'react';
import '../App.css';
import './css/carousel.scss';
import {motion} from 'framer-motion';
import mainbase from '../data/anibase';
import ModalVideo from 'react-modal-video';
import LoadData from './loadData';
import { Link } from 'react-router-dom';
import Modal from './modal';





const HeroSlider = () => {
    const [openmodal, setModal] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState(null);
    const [isOpen, setOpen] = useState(false);


    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [carousel.current]);
    
    const [trending, setTrending] = useState([]);
    const [useThis, setUseThis] = useState([]);
    const getTrending = async() => { const trending = await LoadData('Search');  setTrending(trending); setUseThis(trending); };
    useEffect(() => {  
        if(trending.length === 0) getTrending();
    }, []);
    function updateVideoId(currentVideoId) {
        setCurrentVideoId(currentVideoId);
    }
    if (isOpen === true) {
        document.body.style.overflow="hidden";
    }
    else {
        document.body.style.overflow="unset";
    };

    return(
      
        <><motion.div  ref={carousel}  className='carousel_container' whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='carousel'>
          {useThis.map((item) => {
            return (
              <motion.div className='item' key={item.id}>
                <div className='over_card'>
                  <button onClick={() => {setOpen(true); updateVideoId(item.pv); } } className="item_pv_button">
                    <span></span>
                  </button>
                </div>
                
                <img src={item.banner} alt="cannot display" />
                <Link style= { {textDecoration: 'none'}}  key={item.id} to={`../anime/${item.id}`} state={item} className='title'>{item.title}</Link>
  
              </motion.div>
  
            );
          })}
  
        </motion.div>
      </motion.div>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={currentVideoId} onClose={() => setOpen(false)} /></>
);
}

export default HeroSlider;