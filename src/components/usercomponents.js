import React, {Component} from 'react';
import '../App.css';
import '../components/css/userlist.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect, useLocation} from "react";
import ScrollToTop from '../scrolltop';
import LoadData from '.././components/loadData';
import { Fav_button, Spin_button } from './list_buttons';


const UserList = (table) => {

    const [userAnimeEntries, setUserAnimeEntries] = useState([]);
    const [useThis, setUseThis] = useState([]);

    const profileID = table.profileID;

    const getUserAnimeEntries = async() => { const userAnimeEntries = await LoadData('UserAnimeEntries', profileID);  setUserAnimeEntries(userAnimeEntries); };

    
    useEffect(() => {  
        if(profileID != null){
            if(userAnimeEntries.length === 0) getUserAnimeEntries();
            setUseThis(table.titleone === "Favorites" ? table.data.favourites : userAnimeEntries);
        }
    }, [table]);

    return(
        <>
        <div className='type_header'>
            <p>{table.titleone}</p>
        </div><div className='card_position_results'>
                {useThis?.map((item) => {
                    if (item.status === table.titleone) return(
                        <div className='card_position_cont' key={item.id} state={item.status === table.titleone}>
                            <Link className='card_position' to={`../anime/${item.id}`}>
                                <div className='overlay_gray '></div>
                                <img src={item.cover} alt="cannot display" />
                                    <div className='btn_editor_cont'>
                                </div>
                            </Link>
                            <div className='card_position_title'>
                                <Link style={{ textDecoration: 'none' }} key={item.id} to={`../anime/${item.id}`}>
                                <p>{item.title}</p> 
                                </Link>
                            </div>
                        </div>
                    );
                  
               if (table.titleone === "Favorites") return(
                <>
                 <div className='card_position_cont' key={item.anime_id} >
                <Link className='card_position' to={`../anime/${item.anime_id}`}>
                    <div className='overlay_gray '></div>
                    <img src={item.cover} alt="cannot display" />
                </Link>
                <div className='card_position_title'>
                    <Link style={{ textDecoration: 'none' }} key={item.anime_id} to={`/anime/${item.anime_id}`}>
                        <p>{item.title}</p> 
                    </Link>
                </div>
                </div>
                </>
                );
                
                
                
                })}
            </div>
       </>
    );
}

export default UserList;