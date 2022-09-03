import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import '../css/Item_anime_main.css';
import { Link } from 'react-router-dom';
import LoadData from '../loadData';



function Item_tabs() {

  const [toggleState, setToggle] = useState(1);

  const initTab = (index) => {
    setToggle(index);
  };

 const { id } = useParams();

 const [data, setData] = useState([]);
 const [relatedEntries, setRelatedEntries] = useState([]);
 const [characters, setCharacters] = useState([]);

  const getData = (async() => { const data = await LoadData('Anime', id);  setData(data); });
  const getCharacters = (async() => { const characters = await LoadData('Characters', id);  setCharacters(characters); });
  const getRelatedEntries = (async() => { const relatedEntries = await LoadData('Related', id);  setRelatedEntries(relatedEntries); });

  useEffect(() => {
      getData();
      getCharacters();
      getRelatedEntries();
  }, []);



  return (
    <div className="item_tabs_container">
      <div className="item_tabs">
        <button className={toggleState === 1 ? "item_tabs active_tab" : "item_tabs"} onClick={() => initTab(1)}>
          <p>Episodes</p>
        </button>
        <button className={toggleState === 2 ? "item_tabs active_tab" : "item_tabs"} onClick={() => initTab(2)}>
        <p>Characters</p>
        </button>
        <button className={toggleState === 3 ? "item_tabs active_tab" : "item_tabs"} onClick={() => initTab(3)}>
         <p>Relations</p>
        </button>
      </div>

      <div className="item_tab_results">
        <div
          className={toggleState === 1 ? "items  active_item" : "items"}>
             <div className="videos_wrapper">
             {data.map((item) => {
                console.log(item)
                    return(
               <>
               <div className="Video_card"><iframe allowFullScreen={true} src={item.link} /> <p>{item.ep_nr} - {item.title}</p><p>Time[{item.episode_time}]</p></div>
             </>
                    );
                  })}
            </div>
        </div>

        <div
          className={toggleState === 2 ? "items  active_item" : "items"}
        >
             <div classname="characters_wrapper">
         
         <div className="character_cards_container">
  
         {characters.map((item) => {
          return(
           <div className="character_card">
            <Link onClick={item.characters = []} style= { {textDecoration: 'none'}} className='character_card_wrap' key={item.id} to={`../character/${item.id}`} state={item}>
             <img src={item.image} alt="cover"/>
             <div className="character_card_title">{item.name}</div>
             </Link>
           </div>
            );
           })}
           
         </div>
          
     </div>
        </div>

        <div
          className={toggleState === 3 ? "items  active_item" : "items"}
        >
           <div classname="relations_wrapper">
         
         <div className="relation_cards_container">
  
         {relatedEntries.map((item) => {
          console.log(item)
          return(
           <div className="relation_card">
            <Link onClick={item.relatedEntries = []} style= { {textDecoration: 'none'}} className='card_wrap' key={item.id} to={`../anime/${item.related_id}`} state={item}>
             <img src={item.cover} alt="cover"/>
             <div className="card_title">{item.title}</div>
             </Link>
           </div>
            );
           })}
           
         </div>
          
     </div>
        </div>
      </div>
    </div>
  );
}


export default Item_tabs;