import React from 'react';
import {useState, useEffect} from 'react';
import '../../App.css';
import '../css/Item_anime.scss';
import {Fav_button, Change_Status}from '.././list_buttons';
import NavBar from './navbar';
import ModalVideo from 'react-modal-video'
import { useParams } from 'react-router-dom';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import mainbase from '../../data/anibase';
import manga_base from '../../data/mangabase';
import Home from '../pages/Home';
import LoadData from '../loadData';
import Modal from '.././modal';


const Char_content = () =>  {
    
const { id } = useParams();
const [character, setCharacter] = useState([]);
const getCharacter = async() => { const character = await LoadData('Character', id);  setCharacter(character[0]); };

  useEffect(() => {
      if(character.length === 0)
        getCharacter();
  }, []);



    return(
        <div className='item_container'>
        <div className='item_back_cont' />
          <div className='overlay2'/>
          <img className="item_back" src='' alt="bg"></img>
          <NavBar/>
        <div className='items_main'>
              <div className='item_left_content'>
                <div className='item_left_container'>
                <div  className='item_card'>
                  <div className='overlay_card'>
                  </div>
                  <img src={character.image} alt="bg"></img>
              </div>
             
            <div className='item_info'>
              <div className='item_heading'>
                <h1>{character.name}</h1>
              </div>
             
              <div className='item_details'>
             <table>
                <tr>
                  <td>Age:</td>
                  <td>{character.age}</td>
                </tr>
                 <tr>
                  <td>Gender:</td>
                  <td>{character.gender}</td>
                 </tr>
                 <tr>
                  <td>Blood type:</td>
                  <td>{character.blood_type}</td>
                 </tr>
                 <tr>
                  <td>Height:</td>
                  <td>{character.height}</td>
                 </tr>
                 </table>
              </div>
              </div>
              </div>
           
              <div className='item_summary'>
                <h1>Character description</h1>
                <p>{character.description}</p>
              </div>
            </div>
            
              <div className='item_right_content'>
              <div className='item_fan_quotes'>
                  <h1>Favorite Quote</h1>
                  <p>"I Don't Know How I'll Feel When I'm Dead, But I Don't Want To Regret The Way I Lived."</p>
                </div>
              </div>
      
    </div>
    </div>
  

    )
}


export default Char_content;