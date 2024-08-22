import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import About from './pages/About';
import './App.css'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterList />} />
        <Route path="/about" element={<About />} />
      </Routes>

      </div>  
  );
};

export default App;
