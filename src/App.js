import React from 'react';
import './App.css';
import $ from "jquery";
import Home from './components/pages/Home';
import Anitem from './components/pages/Anitem';
import Search from './components/pages/Search';
import UserProfile from './components/pages/UserProfile';
import Item_anime_heading from './components/maincomponents/Item_anime_heading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, forwardRef, useImperativeHandle,useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './scrolltop';
import LoginForm from './components/pages/login';
import RegisterForm from './components/pages/register';



function App() {
  const [openmodal, closeModal] = useState(false);
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='anime/:id' element={<Anitem />} />
          <Route path='search/' element={<Search />} />
          <Route path='login/' element={<LoginForm />} />
          <Route path='register/' element={<RegisterForm />} />
          <Route path='profile/:username' element={<UserProfile />} />
        </Routes>
      </ScrollToTop>
    </Router>
 
  );
}

export default App;
