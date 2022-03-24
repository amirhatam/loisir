import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Calculator from './views/Calculators';
import Home from './views/Home';
import Jeux from './views/Games';
import PetitsChevaux from './views/game/PetitsChevaux';
import LargeNumbers from './views/calculator/LargeNumbers';
import AgeInDays from './views/calculator/AgeInDays';
import SecondsToDate from './views/calculator/SecondsToDate';
import Tribonacci from './views/calculator/Tribonacci';

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
        <Route path="/calculator/large-numbers" exact element={<LargeNumbers />} />
        <Route path="/calculator/tribonacci" exact element={<Tribonacci />} />
        <Route path="/calculator/age-in-days" exact element={<AgeInDays />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
