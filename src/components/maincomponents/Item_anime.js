import React from 'react';
import {useState} from 'react';
import '../../App.css';
import '../css/Item_anime.css';
import NavBar from './navbar';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import mainbase from '../../data/anibase';
import manga_base from '../../data/mangabase';


function Item_anime() {

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
          <img className="item_back" src="https://www.gamereactor.pl/media/76/jujutsukaisen_3627673b.jpg" alt="bg"></img>
          <NavBar/>
        <div className='items_main'>
              <div className='item_left_content'>
                <div className='item_left_container'>
                <div onClick={()=> setOpen(true)} className='item_card'>
                
                  <div className='overlay_card'></div>
                  <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg" alt="bg"></img>
              </div>
             
            <div className='item_info'>
              <div className='item_heading'>
                <h1>Jujutsu Kaisen</h1>
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
                  <td>Sample</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>2017</td>
                 </tr>
                 <tr>
                  <td>Chapters</td>
                  <td>24</td>
                 </tr>
                 </table>
              </div>
              </div>

             
              </div>
              <div className='item_summary'>
                <h1>Summary</h1>
                <p>Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the "King of Curses."

Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.

Written by MAL Rewrite</p>
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
    <ModalVideo  channel='youtube' autoplay isOpen={open} videoId="pkKu9hLT-t8" onClose={() => setOpen(false)} />
  </div>


  )
}

export default Item_anime;