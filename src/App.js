import React from 'react';
import NavBar from './components/Navbar/navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
        <Route path='/' exact element={<Home/>} />
          </Routes>
      </Router>
  );
}

export default App;
