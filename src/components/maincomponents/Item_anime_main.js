import React from 'react';
import '../../App.css';
import '../css/Item_anime_main.scss';
import { useLocation, useParams } from 'react-router-dom';
import Item_tabs from './tabs';


function Item_anime_main() {
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return(
        <div className='item_page_container'>
            <Item_tabs tabone='Episodes' tabtwo='Characters' tabthree='Relations'/>
        </div>
    )
}

export default Item_anime_main;