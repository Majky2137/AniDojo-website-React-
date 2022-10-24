import React from 'react';
import '../../App.css'
import Footer from '../maincomponents/Footer';
import { useParams } from "react-router-dom";
import ScrollToTop from '../../scrolltop';
import Char_content from '../maincomponents/Char_content';


function Charitem() {
  document.body.style.overflow = "scroll"
  document.body.style.overflowX = "hidden"
  return (
      <>
      <ScrollToTop>
      <Char_content/>
      <Footer/>
      </ScrollToTop>
      </>
  );
}

export default Charitem;