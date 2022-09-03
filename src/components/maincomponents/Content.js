import React from 'react';
import '../../App.css';
import '../css/Content.css';
import mainbase from '../../data/anibase';
import manga_base from '../../data/mangabase';
import { Link } from 'react-router-dom';
import { useState, useEffect} from "react";
import LoadData from '../loadData';

const Content = () => {

  const [data, setData] = useState([]);
  const getData = async() => { const data = await LoadData('Home');  setData(data); };

  useEffect(() => {
      getData();
  }, []);



  return (
<div className='page_content'>
  <div className='header-title-info'>
                  <p>Trending</p>
  </div>
    <div className='results'>
              {data.map((item) => {
                    return(
        <Link className='card' key={item.id} to={`anime/${item.id}`} state={item}>        
       <div className='overlay'></div>
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
                  <p>Anime Categories</p>
  </div>
  <div className='categories'>
    
  {mainbase[1].map((item) => {
                    return(
    <div className='cat_item_cont'>
      <div className='cat_item'>
      <img src={item.image} alt="cannot display"/>
      </div>
      <p className='cat_title'>{item.title}</p>
    </div>
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
  );
}

export default Content;