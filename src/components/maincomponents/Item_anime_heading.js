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
import ScrollToTop from '../../scrolltop';


const Item_anime_heading = () =>  {

  const [openmodal, setModal] = useState(false);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const getData = async() => { const data = await LoadData('AnimeID', id); setData(data[0]); };


  
    useEffect(() => {
        getData();
    }, []);
  
  if(data != null && data !== [] && data.pv){

  return (
    <ScrollToTop>
      <div className='item_container'>
        <div className='item_back_cont'/>
          <div className='overlay2'/>
          <img className="item_back" src={data.banner} alt="bg"></img>
          <NavBar/>
        <div className='items_main'>
              <div className='item_left_content'>
                <div className='item_left_container'>
                <div  className='item_card'>
                  <div className='overlay_card'>
                  <button onClick={()=> setOpen(true)} class="item_pv_button" >
                  <span></span>
                  </button>
                  <div className='btn_editor_cont'>
                  <i className='fa-solid fa-gear openEditor_btn' onClick={ () =>{setModal(true)}}></i>
                  </div>
                  </div>
                  <img src={data.cover} alt="bg"></img>
              </div>
             
            <div className='item_info'>
              <div className='item_heading'>
                <h1>{data.title}</h1>
              </div>

              <div className='item_categories'>
                <span>Action</span>
                <span>Drama</span>
                <span>Adventure</span>
        
              </div>
             
             <div className='item_details'>
             <table>
                <tr>
                  <td>Studio</td>
                  <td>{data.nazwa_studia}</td>
                </tr>
                 <tr>
                  <td>Year</td>
                  <td>-</td>
                 </tr>
                 <tr>
                  <td>Status</td>
                  <td>{data.status}</td>
                 </tr>
                 </table>
              </div>
              </div>
              </div>
              <div className='btns_container'>
              <Change_Status/>
              <Fav_button/>
              </div>
              <div className='item_summary'>
                <h1>Summary</h1>
                <p>{data.description}</p>
              </div>
            </div>
            
              <div className='item_right_content'>
                <div className='item_fan_quotes'>
                  <h1>Age Clasification:</h1>
                  <p>18+</p>
                </div>
          
                <div className='item_tags'>
                  <h1>Tags</h1>
                  <p>#Tag1</p>
                  <p>#Tag2</p>
                  <p>#Tag3</p>
                  <p>#Tag4</p>
              
                </div>
              </div>
      
    </div>
  
    <ModalVideo  channel='youtube' autoplay isOpen={open} videoId={ data.pv } onClose={() => setOpen(false)} />
    {openmodal && <Modal closeModal={openmodal} anime_id={id}/>}
  </div>

</ScrollToTop>
  )
}
}

export default Item_anime_heading;