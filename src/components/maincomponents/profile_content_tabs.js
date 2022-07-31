import { useState } from "react";
import '../css/UserProfile.css';

const Profile_tabs =() => {
  const [toggleState, setToggle] = useState(1);

  const initTab = (index) => {
    setToggle(index);
  };

  return (
    <div className=" content_container">
      <div className="profile_tabs">
        <button className={toggleState === 1 ? "profile_tabs active_tab" : "profile_tabs"} onClick={() => initTab(1)}>
          <p>Overview</p>
        </button>
        <button className={toggleState === 2 ? "profile_tabs active_tab" : "profile_tabs"} onClick={() => initTab(2)}>
        <p>Anime List</p>
        </button>
        <button className={toggleState === 3 ? "profile_tabs active_tab" : "profile_tabs"} onClick={() => initTab(3)}>
         <p>Manga List</p>
        </button>
        <button className={toggleState === 4 ? "profile_tabs active_tab" : "profile_tabs"} onClick={() => initTab(4)}>
         <p>Favorites</p>
        </button>
        <button className={toggleState === 5 ? "profile_tabs active_tab" : "profile_tabs"} onClick={() => initTab(5)}>
         <p>Stats</p>
        </button>
        <button className={toggleState === 6 ? "profile_tabs active_tab" : "profile_tabs"} onClick={() => initTab(6)}>
         <p>Following</p>
        </button>
      </div>

      <div className="profile_tabs_container">
        <div className={toggleState === 1 ? "items_container  active_item" : "items_container"}>
            <div className="left_container">
              <div className="activiti_wrap">
                <div className="activiti_header">
                  <h2>Overview of your profile</h2>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
            <div className="middle_container">
            <div className="overview_wrap">
                <div className="overview_header">
                  <h2>Latest activity</h2>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
           
        </div>

        <div
          className={toggleState === 2 ? "items_container  active_item" : "items_container"}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "items_container  active_item" : "items_container"}
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
        <div
          className={toggleState === 4 ? "items_container  active_item" : "items_container"}
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
        <div
          className={toggleState === 5 ? "items_container  active_item" : "items_container"}
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
        <div
          className={toggleState === 6 ? "items_container  active_item" : "items_container"}
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

export default Profile_tabs;