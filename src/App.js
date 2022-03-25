import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Calculator from './views/Calculators';
import Home from './views/Home';
import Games from './views/Games';
import PetitsChevaux from './views/game/PetitsChevaux';
import LargeNumbers from './views/calculator/LargeNumbers';
import AgeInDays from './views/calculator/AgeInDays';
import SecondsToDate from './views/calculator/SecondsToDate';
import Tribonacci from './views/calculator/Tribonacci';
import { Footer } from './components/Footer';
import ContactPage from './views/ContactPage';
import SquareNumbers from './views/calculator/SquareNumbers';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/games" exact element={<Games />} />
        <Route path="/games/petits-chevaux" exact element={<PetitsChevaux />} />
        <Route path="/calculator" exact element={<Calculator />} />
        <Route path="/calculator/seconds-to-date" exact element={<SecondsToDate />} />
        <Route path="/calculator/large-numbers" exact element={<LargeNumbers />} />
        <Route path="/calculator/tribonacci" exact element={<Tribonacci />} />
        <Route path="/calculator/age-in-days" exact element={<AgeInDays />} />
        <Route path="/calculator/square-numbers" exact element={<SquareNumbers />} />
        <Route path="/contact" exact element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
