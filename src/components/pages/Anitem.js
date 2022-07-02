import React from 'react';
import '../../App.css'
import Item_anime_heading from '../maincomponents/Item_anime_heading';
import Item_anime_main from '../maincomponents/Item_anime_main';
import mainbase from '../../data/anibase';




function Anitem() {
  return (
      <>
      <Item_anime_heading/>
      <Item_anime_main/>
      </>
  );
}

export default Anitem;