import React from 'react';
import {useState, useEffect} from 'react';
import './css/Item_anime.css';
import {Link, useParams} from 'react-router-dom';
import LoadData from './/loadData';



const Fav_button = () => {

  const [favorites, setFavorite] = useState("");

  return (
      <button  className={favorites ? "btn_text" : "btn_plus"}  onClick={() => setFavorite((isFavorite) => !isFavorite)}><i className={favorites ? "fa-solid fa-heart-crack" : "fa-solid fa-heart"}></i></button>
  );
  };

const Spin_button = () => {

  const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count => count + 1);
    };
    const decrement = () => {
      if(count <= 0) {
        return;
      } else {
        setCount(count - 1);
      }
    };
   
  return (
    <div class="spin_cont">

    <input type="text" class="spin__input" value={count} />


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

const Date_button = () => {


  return (
    <div class="spin_cont">

    <input type="date" class="spin__input"  />


    
</div>
  )
};


const Change_Status =() => {

  const { id } = useParams();

  const [userAnimeStatus, setUserAnimeStatus] = useState('');

  const getUserAnimeStatus = async() => { const userAnimeStatus = await LoadData('userAnimeStatus', id); setUserAnimeStatus(userAnimeStatus[0]['status_id']); setStatus({...status, activeStatus : userAnimeStatus[0]['status_id']}); };

  useEffect(() => {
    if(userAnimeStatus.length === 0) getUserAnimeStatus();
  }, []);
  


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

  const updateUserAnimeStatus = async(status_id) => { await LoadData('updateUserAnimeStatus', id, null, status_id); };
  const addAnimeEntry = async() => { await LoadData('UserAddAnimeEntry', id); };

  function toggleStatus(e) {
    setStatus({...status, activeStatus: e.target.value });
    updateUserAnimeStatus(e.target.value);
  }

  

console.log(status.activeStatus, userAnimeStatus);
  return userAnimeStatus > 0
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
<button className='btn_add_unlogged' onClick={addAnimeEntry()}>
<span>Add to list</span>
</button>;

};

export {Change_Status, Fav_button,Spin_button,Date_button};
