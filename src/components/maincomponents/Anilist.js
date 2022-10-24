import React, {Component} from 'react';
import '../../App.css';
import '../css/Anilist.scss';
import mainbase from '../../data/anibase';
import manga_base from '../../data/mangabase';
import { Link } from 'react-router-dom';
import { useState, useEffect} from "react";
import ScrollToTop from '../../scrolltop';
import LoadData from '../loadData';
import NavBar from './navbar';
import Select from 'react-select';
import { SlideShow } from './Slideshow';
import Modal from '../modal';

const Anilist = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchedAnime, setSearchedAnime] = useState([]);
    const [genres, setGenres] = useState([]);
    const [trending, setTrending] = useState([]);
    const [popularSeasonal, setPopularSeasonal] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);
    const [popularNextSeason, setPopularNextSeason] = useState([]);
    const [useThis, setUseThis] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([{}]);
    const [openmodal, setModal] = useState(false);
    const [animeID, setAnimeID] = useState(0);
    let options2 = [{}];
    
    const getTrending = async() => { const trending = await LoadData('Search');  setTrending(trending); setUseThis(trending); };
    const getGenres = async() => { const genres = await LoadData('Genres');  setGenres(genres); };
    const getPopularSeasonal = async() => { const popularSeasonal = await LoadData('Search2');  setPopularSeasonal(popularSeasonal); };
    const getMostPopular = async() => { const mostPopular = await LoadData('Search3');  setMostPopular(mostPopular); };
    const getPopularNextSeason = async() => { const popularNextSeason = await LoadData('Search4');  setPopularNextSeason(popularNextSeason); };
    const getSearchedAnime = async() => { const searchedAnime = await LoadData('Searched', null, searchTerm);  setSearchedAnime(searchedAnime); };
    const getOptions = () => {genres.forEach((genre) => { return options2.push([{'value' : genre.id, 'label' : genre.genre}]); })};
    const restartModal = () => { setModal(false); setAnimeID(0); setModal(true);};

    useEffect(() => {  
        if(genres.length === 0) getGenres();
        if(trending.length === 0) getTrending();
        if(popularSeasonal.length === 0) getPopularSeasonal();
        if(mostPopular.length === 0) getMostPopular();
        //if(popularNextSeason.length === 0) getPopularNextSeason();
        
        if(searchTerm.length > 2){
            getSearchedAnime();
        }
        else if(searchedAnime.length === 0 && searchTerm.length < 3)    
            setUseThis(trending);

        if(searchedAnime.length > 0){
            setUseThis(searchedAnime);
            setSearchedAnime([]);
        }
        else    
            setUseThis(trending);

    }, [searchTerm]);
  
    console.log(options2);
    return (
        <><NavBar />
        <div className='wrapper' onLoad={getOptions(genres)}>
                 <SlideShow/>
            <div className='main_container'>
            <div className='search_box'> 
         
                <input className='input_inner' type="search " name="ani_search" placeholder='Search for a specific anime' onChange={event => {setSearchTerm(event.target.value)}}></input> 
                <select className='input_inner'>
                    {genres.map((item) => (
                    <option onChange={event => {setSearchTerm(event.target.value)}}>
                      {item.genre}
                    </option>
                    ))}
                    </select>
                <input className='input_inner' type="search " name="ani_search" placeholder='Any'></input>  
                <input className='input_inner' type="search " name="ani_search" placeholder='Any'></input>  
                <input className='input_inner' type="search " name="ani_search" placeholder='Any'></input>  
                <input className='input_inner' type="search " name="ani_search" placeholder='Any'></input>   
                <input className='input_inner' type="search " name="ani_search" placeholder='Any'></input>   
                </div> 

            <div className='section_header'>
                  <p>Trending now</p>
                  <span className='see_more'>More</span>
            </div> 
            <div className='anime'>
                { useThis.map((item) => {
                    return(
                        <div style= { {textDecoration: 'none'}} className='card-cont' key={item.id} to={`../anime/${item.id}`} state={item}>   
                        <div className='card-anime'> 
                            <div className='rating_views_info'> 
                         <p> <i  class="fa-solid fa-star" > 8.2 </i></p>
                            </div>  
                            <div style={{paddingRight:0, width:'50%',zIndex:999, position:'absolute', justifyContent:'flex-start'}} className='btn_editor_cont'>
                                <i className='fa-solid fa-gear openEditor_btn' onClick={ () =>{restartModal(); setAnimeID(item.id); setModal(true)}}></i>
                            </div>
                        <Link key={item.id} to={`../anime/${item.id}`} state={item} className='titleAnime'>
                            <p >{item.title}</p>
                        </Link>
                    <Link className='overlay_gray' key={item.id} to={`../anime/${item.id}`} state={item}></Link>
                        <img src={item.cover} alt="cannot display"/>
                    </div>
                    </div>   
               
                    );
                     })}
            </div>

            <div className='section_header'>
                  <p>Popular this season</p>
                  <span className='see_more'>More</span>
            </div> 
              
            <div className='anime'>
              {popularSeasonal.map((item) => {
                    return(
                        <div style= { {textDecoration: 'none'}} className='card-cont' key={item.id} to={`../anime/${item.id}`} state={item}>   
                        <div className='card-anime'> 
                            <div className='rating_views_info'> 
                         <p> <i  class="fa-solid fa-star" > 8.2 </i></p>
                            </div>  
                            <div style={{paddingRight:0, width:'50%',zIndex:999, position:'absolute', justifyContent:'flex-start'}} className='btn_editor_cont'>
                                <i className='fa-solid fa-gear openEditor_btn' onClick={ () =>{restartModal(); setAnimeID(item.id); setModal(true)}}></i>
                            </div>
                        <Link key={item.id} to={`../anime/${item.id}`} state={item} className='titleAnime'>
                            <p >{item.title}</p>
                        </Link>
                    <Link className='overlay_gray' key={item.id} to={`../anime/${item.id}`} state={item}></Link>
                        <img src={item.cover} alt="cannot display"/>
                    </div>
                    </div>
               
                    );
                     })}
            </div>

            <div className='section_header'>
                  <p>Upcoming Next Season</p>
                  <span className='see_more'>More</span>
            </div> 
              
            <div className='anime'>
              {popularNextSeason.map((item) => {
                    return(
                        <div style= { {textDecoration: 'none'}} className='card-cont' key={item.id} to={`../anime/${item.id}`} state={item}>   
                        <div className='card-anime'> 
                            <div className='rating_views_info'> 
                         <p> <i  class="fa-solid fa-star" > 8.2 </i></p>
                            </div>  
                            <div style={{paddingRight:0, width:'50%',zIndex:999, position:'absolute', justifyContent:'flex-start'}} className='btn_editor_cont'>
                                <i className='fa-solid fa-gear openEditor_btn' onClick={ () =>{restartModal(); setAnimeID(item.id); setModal(true)}}></i>
                            </div>
                        <Link key={item.id} to={`../anime/${item.id}`} state={item} className='titleAnime'>
                            <p >{item.title}</p>
                        </Link>
                    <Link className='overlay_gray' key={item.id} to={`../anime/${item.id}`} state={item}></Link>
                        <img src={item.cover} alt="cannot display"/>
                    </div>
                    </div>  
               
                    );
                     })}
            </div>
            <div className='section_header'>
                  <p>All time best</p>
                  <span className='see_more'>More</span>
                
            </div> 
              
            <div className='anime'>
              {mostPopular.map((item) => {
                    return(
                        <div style= { {textDecoration: 'none'}} className='card-cont' key={item.id} to={`../anime/${item.id}`} state={item}>   
                        <div className='card-anime'> 
                            <div className='rating_views_info'> 
                         <p> <i  class="fa-solid fa-star" > 8.2 </i></p>
                            </div>  
                            <div style={{paddingRight:0, width:'50%',zIndex:999, position:'absolute', justifyContent:'flex-start'}} className='btn_editor_cont'>
                                <i className='fa-solid fa-gear openEditor_btn' onClick={ () =>{restartModal(); setAnimeID(item.id); setModal(true)}}></i>
                            </div>
                        <Link key={item.id} to={`../anime/${item.id}`} state={item} className='titleAnime'>
                            <p >{item.title}</p>
                        </Link>
                    <Link className='overlay_gray' key={item.id} to={`../anime/${item.id}`} state={item}></Link>
                        <img src={item.cover} alt="cannot display"/>
                    </div>
                    </div>
                    );
                     })}
            </div>
            </div>
            {openmodal && <Modal closeModal={openmodal} anime_id={animeID}/>}
        </div>
        
        </>
  );
}

export default Anilist;