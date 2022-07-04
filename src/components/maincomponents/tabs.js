import { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import '../css/Item_anime_main.css';

function Item_tabs() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [toggleState, setToggle] = useState(1);

  const initTab = (index) => {
    setToggle(index);
  };
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  let id = data.id;
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:80/xweb/PHP/URL_Checker?site=anime&id=`+id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  if(appState.loading == false && appState.repos != null){
    let repos = appState.repos;
    console.log(repos);
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
         <p>Related</p>
        </button>
      </div>

      <div className="item_tab_results">
        <div
          className={toggleState === 1 ? "items  active_item" : "items"}>
            <table>
             {repos.map((item) => {
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "items  active_item" : "items"}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
}

export default Item_tabs;