import React, {Component} from 'react';
import '../../App.css';
import '../css/Anilist.css';
import mainbase from '../../data/anibase';
import manga_base from '../../data/mangabase';
import { Link } from 'react-router-dom';
import { useState, useEffect} from "react";
import LoadData from '../loadData';
import NavBar from './navbar';

const Anilist = () => {

    const [genres, setGenres] = useState([]);
    const [anime, setAnime] = useState([]);
    const getGenres = (async() => { const genres = await LoadData('Genres');  setGenres(genres); });
    const getAnime = (async() => { const anime = await LoadData('List');  setAnime(anime); });
    useEffect(() => {
        getGenres();
        getAnime();
    }, []);
  
  
  
    return (
        <><NavBar />
        <div className='wrapper'>
            <div className='search_container_card'>
                 
            </div>
            <div className='main_container'>
            <div className='search_box'> 
                <input type="search " name="ani_search" placeholder='Search for a specific anime'></input> 
                <select>
                {genres.map((item) => (
                <>
                <option value={item.id}>{item.genre}</option></>
                ))}
                </select>
                <input type="search " name="ani_search" placeholder='Any'></input>  
                <input type="search " name="ani_search" placeholder='Any'></input>  
                <input type="search " name="ani_search" placeholder='Any'></input>  
                <input type="search " name="ani_search" placeholder='Any'></input>   
                <input type="search " name="ani_search" placeholder='Any'></input>   
                </div> 
                
            <div className='anime'>
              {anime.map((item) => {
                    return(
                        <Link className='card-anime' key={item.id} to={`../anime/${item.id}`} state={item}>   
                    <div className='overlay_gray'></div>
                    <img src={item.cover} alt="cannot display"/>
                    <div className='info'>
                    <h3>{item.title}</h3>
                    </div>
                    </Link>
               
                    );
                     })}
            </div>
            </div>
        </div>
        </>
  );
}

export default Anilist;