import React from 'react';
import './App.css';
import $ from "jquery";
import Home from './components/pages/Home';
import Anitem from './components/pages/Anitem';
import Search from './components/pages/Search';
import UserProfile from './components/pages/UserProfile';
import Item_anime_heading from './components/maincomponents/Item_anime_heading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './scrolltop';


function App() {
  return (
      <Router>
         <ScrollToTop>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='anime/:id'  element={<Anitem/>} />
        <Route path='search/'  element={<Search/>} />
        <Route path='profile/'  element={<UserProfile/>} />
          </Routes>
          </ScrollToTop>
      </Router>
  );
}

export default App;
