import React from 'react';
import {useState, useEffect, useLocation, useParams,} from 'react';
import mainbase from '../../data/anibase';
import '../css/Anilist.scss';
import LoadData from '../loadData';
import { Link } from 'react-router-dom';



const SlideShow = () => {


  const [popularSeasonal, setPopularSeasonal] = useState([]);
  const getPopularSeasonal = async() => { const popularSeasonal = await LoadData('Search2');  setPopularSeasonal(popularSeasonal); };

  useEffect(() => {  
      if(popularSeasonal.length === 0) getPopularSeasonal();
      //if(popularNextSeason.length === 0) getPopularNextSeason();
      
     
  }, [getPopularSeasonal]);

    const [current, setCurrent] = useState(0);
    const length = popularSeasonal.length;
    function nextSlide() {
        setCurrent (current === length -1 ? 0 : current + 1);
    }
    function previousSlide() {
        setCurrent (current === 0 ? length - 1 : current - 1);
    }
    const delay = 8000;

  
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

   useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((previousSlide) =>
          previousSlide === popularSeasonal.length - 1 ? 0 : previousSlide + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [current]);
    return(
        
        <>
         {popularSeasonal.map((slide, index) => {
             return ( index === current && 
              <div className='search_container_card'>
        <a href={`../anime/${slide.id}`} className='overcont'></a>
        <img src={slide.banner} />
        
          <a href={`../anime/${slide.id}`} className='slide_info'>
                            <h1>{slide.title}</h1>
                            <span>{slide.description}</span>
                        </a>
                   <div className='buttons_div'>
                    <div className='left'><i onClick={previousSlide} class="fa-solid fa-circle-arrow-left"></i></div>
                    <div className='right'><i onClick={nextSlide} class="fa-solid fa-circle-arrow-right"></i></div>
            </div>
                   </div>
      
             );  })}</>
    );
}
export {SlideShow};