import React from 'react';
import '../../App.css';
import Anilist from '../maincomponents/Anilist';
import Footer from '../maincomponents/Footer';
import { useParams } from "react-router-dom";
import ScrollToTop from '../../scrolltop';


function Search() {

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