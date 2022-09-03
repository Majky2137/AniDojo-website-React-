import React, {Component} from 'react';
import '../App.css';
import '../components/css/userlist.css';
import { Link } from 'react-router-dom';
import { useState, useEffect} from "react";
import ScrollToTop from '../scrolltop';
import LoadData from '.././components/loadData';
import { Fav_button } from './list_buttons';


const UserList = () => {

    const [userAnimeEntries, setUserAnimeEntries] = useState([]);



    const getUserAnimeEntries = async() => { const userAnimeEntries = await LoadData('UserAnimeEntries');  setUserAnimeEntries(userAnimeEntries); };

 
    useEffect(() => {  
       if(userAnimeEntries.length === 0) getUserAnimeEntries();
    }, []);


    return(
        <><div className='userlist_wrapper'>
        <div className='type_header'>
            <p>Watching</p>
        </div><div className='card_position_results'>
                {userAnimeEntries.map((item) => {
                    return item.status === "Watching" ? 
                        <div className='card_position_cont' key={item.id} to={`../anime/${item.id}`} state={item.status === "Watching"}>
                            <div className='card_position'>
                                <div className='overlay_gray '></div>
                                <img src={item.cover} alt="cannot display" />
                            </div>
                            <div className='card_position_title'>
                                <Link style={{ textDecoration: 'none' }} key={item.id} to={`../anime/${item.id}`}>
                                <p>{item.title}</p> 
                                </Link>
                            </div>
                        </div>
                        : null;
                })}
            </div>

            <div className='type_header'>
            <p>Completed</p>
        </div><div className='card_position_results'>
                {userAnimeEntries.map((item) => {
                    return item.status === "Completed" ? 
                        <div className='card_position_cont' key={item.id} to={`../anime/${item.id}`} state={item.status === "Completed"}>
                            <div className='card_position'>
                                <div className='overlay_gray '></div>
                                <img src={item.cover} alt="cannot display" />
                            </div>
                            <div className='card_position_title'>
                                <Link style={{ textDecoration: 'none' }} key={item.id} to={`../anime/${item.id}`}>
                                <p>{item.title}</p> 
                                </Link>
                            </div>
                        </div>  
                    : null;
                })}
            </div>
            
            <div className='type_header'>
            <p>Dropped</p>
        </div><div className='card_position_results'>
                {userAnimeEntries.map((item) => {
                   return item.status === "Dropped" ? 
                        <div className='card_position_cont' key={item.id} to={`../anime/${item.id}`} state={item.status === "Dropped"}>
                            <div className='card_position'>
                                <div className='overlay_gray '></div>
                                <img src={item.cover} alt="cannot display" />
                            </div>
                            <div className='card_position_title'>
                                <Link style={{ textDecoration: 'none' }} key={item.id} to={`../anime/${item.id}`}>
                                <p>{item.title}</p> 
                                </Link>
                            </div>
                        </div>
                : null;
                })}
            </div>

            <div className='type_header'>
            <p>Planning</p>
        </div><div className='card_position_results'>
                {userAnimeEntries.map((item) => {
                    return item.status === "Planning" ? 
                        <div className='card_position_cont' key={item.id} to={`../anime/${item.id}`} state={item.status === "Planning"}>
                            <div className='card_position'>
                                <div className='overlay_gray '></div>
                                <img src={item.cover} alt="cannot display" />
                            </div>
                            <div className='card_position_title'>
                                <Link style={{ textDecoration: 'none' }} key={item.id} to={`../anime/${item.id}`}>
                                <p>{item.title}</p> 
                                </Link>
                            </div>
                        </div>
                    : null;
                })}
            </div>

            <div className='type_header'>
            <p>Rewatching</p>
        </div><div className='card_position_results'>
                {userAnimeEntries.map((item) => {
                    return item.status === "Rewatching" ? 
                        <div className='card_position_cont' key={item.id} to={`../anime/${item.id}`} state={item.status === "Rewatching"}>
                            <div className='card_position'>
                                <div className='overlay_gray '></div>
                                <img src={item.cover} alt="cannot display" />
                            </div>
                            <div className='card_position_title'>
                                <Link style={{ textDecoration: 'none' }} key={item.id} to={`../anime/${item.id}`}>
                                <p>{item.title}</p> 
                                </Link>
                            </div>
                        </div>
                    : null;
                })}
            </div>
            </div></>
    );
}
export default UserList;