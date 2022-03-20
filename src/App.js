import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Calculator from './views/Calculators';
import Home from './views/Home';
import Jeux from './views/Jeux';
import PetitsChevaux from './views/PetitsChevaux';
import SecondsToDate from './views/SecondsToDate';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/jeux" exact element={<Jeux />} />
        <Route path="/jeux/petits-chevaux" exact element={<PetitsChevaux />} />
        <Route path="/calculator" exact element={<Calculator />} />
        <Route path="/calculator/seconds-to-date" exact element={<SecondsToDate />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
