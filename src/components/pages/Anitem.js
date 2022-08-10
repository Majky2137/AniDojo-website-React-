import React from 'react';
import '../../App.css'
import Item_anime_heading from '../maincomponents/Item_anime_heading';
import Item_anime_main from '../maincomponents/Item_anime_main';
import Footer from '../maincomponents/Footer';
import { useParams } from "react-router-dom";
import ScrollToTop from '../../scrolltop';


function Anitem() {
  document.body.style.overflow = "scroll"
  document.body.style.overflowX = "hidden"
  return (
      <>
      <ScrollToTop>
      <Item_anime_heading/>
      <Item_anime_main/>
      <Footer/>
      </ScrollToTop>
      </>
  );
}

export default Anitem;