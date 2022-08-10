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

  const getData = (async() => { const data = await LoadData('Anime', id);  setData(data); });
  const getRelatedEntries = (async() => { const relatedEntries = await LoadData('Related', id);  setRelatedEntries(relatedEntries); });

  useEffect(() => {
      getData();
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
            <table>
             {data.map((item) => {
                console.log(item)
                    return(
               <>
              <tr>
               <td><iframe allowFullScreen={true} src={item.link} /> <th>{item.ep_nr} - {item.title}<th>Time[{item.episode_time}]</th></th>
              </td>
              
               <tr>   
             </tr>
             </tr>
             </>
                    );
                  })}
            </table>
        </div>

        <div
          className={toggleState === 2 ? "items  active_item" : "items"}
        >
        
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
            <Link  onClick={item.relatedEntries = []} style= { {textDecoration: 'none'}} className='card_wrap' key={item.id} to={`../anime/${item.related_id}`} state={item}>
             <img  src={item.cover} alt="cover"/>
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