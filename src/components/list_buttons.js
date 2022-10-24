import React from 'react';
import {useState, useReducer, useEffect} from 'react';
import './css/list_buttons.scss';
import {Link, useParams} from 'react-router-dom';
import LoadData from './/loadData';
import { toast } from 'react-toastify';


//Profile Top buttons
const TopButtons = () => {

  const [notified,setNotified] = useState();
  const [got,setGot] = useState();

  return (
    <>
    <button className="bell" onClick={() => setNotified((isNotified) => !isNotified)}>
      <i class={notified ? "fa-regular fa-bell-slash" : " fa-solid fa-bell "}></i>
    </button>
    
    <button className="mail" onClick={() => setGot((isGot) => !isGot)}>
        <i class={got ? "fa-regular fa-envelope" : "fa-solid fa-envelope"}></i>
      </button>
      </>
  )
};

//Profile Search Input

const SearchInput = () => {
  return(
    <input placeholder="Search in your profile" type="text" className="Profile_search"/>
  );
};

//Global Favorites button

const Fav_button = () => {
  const { id } = useParams();
 
  const [favorite, setFavorite] = useState(0);

  const [getFav, setFav] = useState(0);
  const getAnimeFavorite = async() => { const favorite = await LoadData('UserGetAnimeFavorite', id); setFavorite(favorite[0].favourite); setFav(1);}; 
  const setAnimeFavorite = async(favorite) => { await LoadData('UserSetAnimeFavorite', id,  favorite);  setFavorite(favorite); };

  useEffect(() => {
    if(getFav == 0) getAnimeFavorite();
  }, []);

  return (
      <button  className={favorite ? "btn_text" : "btn_plus"}  onClick={() => { !favorite ? toast.success ('Added to favorites') : toast.warning('Deleted from favorites'); setAnimeFavorite(!favorite); }}><i className={favorite ? "fa-solid fa-heart-crack" : "fa-solid fa-heart"}></i></button>
  );
  };

//Increment Decrement spin input button

let info = {episode : 0, rating : 0.0, rewatches : 0};



const Spin_button = (type) => {
  const { id } = useParams();
  const getInfo = async() => { const retrievedInfo = await LoadData("setInfo", id, info); info = {episode : retrievedInfo.episode, rating : retrievedInfo.score, rewwatches : retrievedInfo.rewatches}};
  const setInfo = async() => { await LoadData("setInfo", id, info);};
  type = type.type;
  const value = 1;

  const [count, setCount] = useState(0);

  useEffect(() => {
    switch(type){

      case 'episode':
        info.episode = count;
      break;

      case 'rating':
        info.rating = count;
      break;

      case 'rewatches':
        info.rewatches = count;
      break;

      default:
        return;
    }
    console.log(info);
    setInfo();
  }, [count]);

    const increment = () => {
      setCount(count => count + 1);
    }
     const decrement = () => {
      if(count <= 0) {
        return;
      } else {
        setCount(count => count - 1);
      }
    };
   
  return (
    <div class="spin_cont">

    <input type="text" class="spin__input" value={count}/>


    <div class="spin__buttons">

        <button class="spin__button">
        <i class="fa-solid fa-plus" onClick={increment}></i>
        </button>

  
        <button class="spin__button">
        <i class="fa-solid fa-minus" onClick={decrement}></i>
        </button>
    </div>
</div>
  )
};


//Global Date button
const Date_button = (type) => {

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [date, setDate] = useState(0);

  useEffect(() => {
    switch(type){

      case "start":
        setStart(date);
      break;

      case "end":
        setEnd(date);
      break;

      default:
        return;
    }

    info.push({start : start, end : end});
    console.log(info);
  });

  return (
    <div class="spin_cont">

    <input type="date" class="spin__input" value={date} onChange={(e) => {setDate(e.value);}} />

</div>
  )
};

//Anime AND Manga status button change after login
const Change_Status =() => {
  const { id } = useParams();
  //const [userAnimeStatus, setUserAnimeStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState({
    activeStatus: null,
    objects: [
      { id: 1, text: "Planning" },
      { id: 2, text: "Watching" },
      { id: 3, text: "Completed" },
      { id: 4, text: "Paused" },
      { id: 5, text: "Dropped" },
      { id: 6, text: "Rewatching" },
      { id: 7, text: "Rewatched" },
    ]
  });

  const getStatus = async() => { const userAnimeStatus = await LoadData('userAnimeStatus', id); setStatus({...status, activeStatus : userAnimeStatus[0]['status_id']}); };
  const getIsLoggedIn = async() => { const isLoggedIn = await LoadData('isLoggedIn'); setIsLoggedIn(isLoggedIn); };

  useEffect(() => {
    if(status.activeStatus === null) getStatus();
    if(isLoggedIn === false) getIsLoggedIn();
  }, []);

  const updateUserAnimeStatus = async(status_id) => { await LoadData('updateUserAnimeStatus', id, status_id); };
  const addAnimeEntry = () => {
      if(isLoggedIn === false)
        window.location = "http://localhost:3000/login";
      else{
        LoadData('UserAddAnimeEntry', id); 
        setStatus({...status, activeStatus : 1});
        toast.success ('Added anime entry');
      }
  };

  function toggleStatus(e) {
      setStatus({...status, activeStatus: e.target.value });
      updateUserAnimeStatus(e.target.value);
      toast.info ('You have changed your status to: ' + e.target.options[e.target.selectedIndex].text);
  }

  return status.activeStatus > 0
?
   <select className="select__input" defaultValue={status.activeStatus} onChange={toggleStatus}>
      {status.objects.map((elements, index) => (
        <option
          value={elements.id}
        >
          {elements.text}
  
        </option>
      ))}
    </select>
:
//Anime AND Manga status button change before login

<button className='btn_add_unlogged' onClick={addAnimeEntry}>
<span>Add to list</span>
</button>;

};

export {Change_Status, Fav_button, Spin_button,Date_button, TopButtons, SearchInput};
