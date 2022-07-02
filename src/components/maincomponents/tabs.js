import { useState } from "react";
import '../css/Item_anime_main.css';

function Item_tabs() {
  const [toggleState, setToggle] = useState(1);

  const initTab = (index) => {
    setToggle(index);
  };

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
              <tr>
                <th>Episode</th>
                <th>Title</th>
                <th>Time</th>
             </tr>
              <tr>
                <td>Episode 1</td>
                <td>Intro</td>
                <td>24 min</td>
             </tr>
              <tr>
                <td>Episode 2</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
               <tr>
                <td>Episode 3</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
              <tr>
                <td>Episode 4</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
              <tr>
                <td>Episode 5</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
              <tr>
                <td>Episode 6</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
              <tr>
                <td>Episode 7</td>
                <td>Intro</td>
                <td>24 min</td>
             </tr>
              <tr>
                <td>Episode 8</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
               <tr>
                <td>Episode 9</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
              <tr>
                <td>Episode 10</td>
                <td>Intro</td>
                <td>24 min</td>
             </tr>
              <tr>
                <td>Episode 11</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
               <tr>
                <td>Episode 12</td>
                <td>Intro</td>
                <td>24 min</td>
              </tr>
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

export default Item_tabs;