import React from 'react';
import '../../App.css';
import Anilist from '../maincomponents/Anilist';
import Footer from '../maincomponents/Footer';
import { useParams } from "react-router-dom";
import ScrollToTop from '../../scrolltop';


function Search() {
  document.body.style.overflow = "scroll"
  document.body.style.overflowX = "hidden"
  return (
      <>
      <ScrollToTop>
      <Anilist/>
      <Footer/>
      </ScrollToTop>
      </>
  );
}

export default Search;