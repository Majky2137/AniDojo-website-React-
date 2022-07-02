import React from 'react';
import {useState} from 'react';
import '../../App.css';
import '../css/Item_anime_main.css';
import mainbase from '../../data/anibase';
import manga_base from '../../data/mangabase';
import Item_tabs from './tabs';


function Item_anime_main() {

    return(
        <div className='item_page_container'>
            <Item_tabs/>
        </div>
    )
}

export default Item_anime_main;