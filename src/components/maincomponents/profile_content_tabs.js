import { data } from "jquery";
import { useState, useEffect } from "react";
import '../css/UserProfile.scss';
import UserList from "../usercomponents";
import mainbase from './../../data/anibase'
import LoadData from '../loadData';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Profile_tabs =() => {
  const [toggleState, setToggle] = useState(1);
  const [favourites, setFavourites] = useState([]);
  const [profileStats, setProfileStats] = useState([]);
  const [profileID, setProfileID] = useState(0);
  const [currentlyWatching, setCurrentlyWatching] = useState([]);

  const { username } = useParams();

  const getCurrentlyWatching = async() => { const currentlyWatching = await LoadData("GetCurrentlyWatching", profileID); setCurrentlyWatching(currentlyWatching);};
  const getProfileID = async() => { const profileID = await LoadData("GetProfileID", username); setProfileID(profileID[0].id);};
  const getFavourites = async () => { const favourites = await LoadData("UserGetAnimeFavorites", profileID); setFavourites(favourites);};
  const getProfileStats = async () => { const profileStats = await LoadData("GetProfileStats", profileID); setProfileStats(profileStats);};
 
  useEffect(() => {
    if(profileID === 0 && isNaN(username)){
      getProfileID();
    }
    else{
      setProfileID(username);
    }
    if(profileID > 0){
      if(profileStats.length === 0) getProfileStats();
      if(currentlyWatching.length === 0) getCurrentlyWatching();
      if(favourites.length === 0) getFavourites();
    }
}, [username, profileID]);

  const initTab = (index) => {
    setToggle(index);
  };

  return (
      <><div className="profile_tabs">
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
    </div><div className="profile_tabs_container">
        <div className={toggleState === 1 ? "items_container  active_item" : "items_container"}>
          <div className="middle_container">
            <div className="overview_wrap">
              <div className="overview_header">
                <h2>Genre overview</h2>
              </div>
              <div className="overview_genre_summary">
                <div style={{backgroundColor:  '#42b983'}} className="genre_capsule">Action</div>
                <div style={{backgroundColor:  'rgb(2, 169, 255)'}} className="genre_capsule">Fantasy</div>
                <div style={{backgroundColor:  '#673ab7'}} className="genre_capsule">Romance</div>
                <div style={{backgroundColor:  'rgb(247, 121, 164)'}} className="genre_capsule">Comedy</div>
                <div style={{backgroundColor:  'rgb(232, 93, 117)'}} className="genre_capsule">Ecchi</div>
              </div>
            </div>

            <div className="currently_wrap">
            <div className="activity_header">
                <h2>Currently watching</h2>
              </div>
                <div className="currently_results">
                {currentlyWatching?.map((item) => {
                console.log(item, item.cover)
                    return(
               <>
               <Link to={`../anime/${item.anime_id}`}>
                <div className="fav_item_card">
                  <img src={item.cover}/>
                </div>
                </Link>
                </>
                );
                })}
                </div>
            </div>

            <div className="overall_wrap">
              <div className="overall_summary">
                { profileStats.map((stat) => { return(
                 <> <div className="statis">
                  <div className="value">{stat.AllAnime}</div>
                  <div className="label">Total Anime</div>
                </div>
                <div className="statis">
                  <div className="value">{stat.Days}</div>
                  <div className="label">Days Watched</div>
                </div>
                <div className="statis">
                  <div className="value">{stat.Score}</div>
                  <div className="label">Mean Score</div>
                </div>
                </>
                ); }) }
              </div>
            </div>

            <div className="activity_wrap">
              <div className="activity_header">
                <h2>Activity</h2>
              </div>
              <div className="activity_result">
              {
              mainbase[0].map((item) => {
                console.log(item)
                    return(
               <>
                <div className="activity_entry">
                  <div className="entry_wrap">
                  <div className="small_entry_block">
                    <div className="cover">
                      <img src={item.mainimage}/>
                    </div>
                    <div className="details">
                      <div className="status">
                        <p>Watched <span> episode </span> 2 </p>
                        <span>Kage no Jitsuryokusha ni Naritakute!</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                </>
                );
                })}
              </div>
            </div>

            <div className="favorites_wrap">
              <div className="favorites_header">
                <h2>Favorites</h2>
              </div>
              <div className="favorites_result">
              {favourites?.map((item) => {
                console.log(item, item.cover)
                    return(
               <>
               <Link to={`../anime/${item.anime_id}`}>
                <div className="fav_item_card">
                  <img src={item.cover}/>
                </div>
                </Link>
                </>
                );
                })}
              </div>
            </div>

            <div className="characters_wrap">
              <div className="characters_header">
                <h2>Characters</h2>
              </div>
              <div className="characters_result">

              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "items_container  active_item" : "items_container"}
        >
          <div className='userlist_wrapper'>
            <UserList profileID={profileID} titleone='Watching' />
            <UserList profileID={profileID} titleone='Completed' />
            <UserList profileID={profileID} titleone='Dropped' />
            <UserList profileID={profileID} titleone='Planning' />
            <UserList profileID={profileID} titleone='Rewatching' />
          </div>
        </div>

        <div
          className={toggleState === 3 ? "items_container  active_item" : "items_container"}
        >
          <p>
          Be patient, this section and functionality are comming soon
          </p>
        </div>
        <div
          className={toggleState === 4 ? "items_container  active_item" : "items_container"}
        >
          <div className='userlist_wrapper'>
            <UserList profileID={profileID} data={{favourites}} titleone='Favorites' />
          </div>
        </div>
        <div
          className={toggleState === 5 ? "items_container  active_item" : "items_container"}
        >
          <p>
          Be patient, this section and functionality are comming soon
          </p>
        </div>
        <div
          className={toggleState === 6 ? "items_container  active_item" : "items_container"}
        >
          <div className='userlist_wrapper'>
            <UserList profileID={profileID} titleone='Following' />
          </div>
        </div>
      </div></>
  );
}

export default Profile_tabs;