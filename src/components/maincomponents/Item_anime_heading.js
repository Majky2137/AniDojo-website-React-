import React from 'react';
import {useState} from 'react';
import '../../App.css';
import '../css/Item_anime.css';
import NavBar from './navbar';
import ModalVideo from 'react-modal-video'
import { useLocation } from 'react-router-dom';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import mainbase from '../../data/anibase';
import manga_base from '../../data/mangabase';
import Home from '../pages/Home';

function Item_anime_heading() {
  const location = useLocation();
  const data = location.state;
  console.log(data);


  
  const FollowButton = () => {
    const [followed, setFollowed] = useState();

    return (
      <div className='item_save'>
      <button onClick={() => setFollowed((isFollowed) => !isFollowed)}>
      <i  class={followed ? "fa-solid fa-square-minus grey" : "fa-solid fa-square-plus white"}
     />
   </button>
   </div>
    )};

    const [open, setOpen] = useState(false)

  return (

      <div className='item_container'>
        <div className='item_back_cont'/>
          <div className='overlay2'/>
          <img className="item_back" src={data.mainimage} alt="bg"></img>
          <NavBar/>
        <div className='items_main'>
              <div className='item_left_content'>
                <div className='item_left_container'>
                <div  className='item_card'>
                  <div className='overlay_card'>
                  <button onClick={()=> setOpen(true)} class="item_pv_button" >
                  <span></span>
                  </button>
                  </div>
                  <img src={data.thumbnail} alt="bg"></img>
              </div>
             
            <div className='item_info'>
              <div className='item_heading'>
                <h1>{data.title}</h1>
               <FollowButton/>
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
                  <td>{data.studio}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{data.type}</td>
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
              <div className='item_summary'>
                <h1>Summary</h1>
                <p>{data.description}</p>
              </div>
            </div>
            
              <div className='item_right_content'>
                <div className='item_fan_quotes'>
                  <h1>Favorite Quote</h1>
                  <p>"I Don't Know How I'll Feel When I'm Dead, But I Don't Want To Regret The Way I Lived."</p>
                  <br></br>
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
    <ModalVideo  channel='youtube' autoplay isOpen={open} videoId={data.video} onClose={() => setOpen(false)} />
  </div>


  )
}

export default Item_anime_heading;