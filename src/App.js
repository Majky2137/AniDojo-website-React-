import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Anitem from './components/pages/Anitem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Anitem' exact element={<Anitem/>} />
          </Routes>
      </Router>
  );
}

export default App;
