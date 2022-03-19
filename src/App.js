import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Jeux from './views/Jeux';
import PetitsChevaux from './views/PetitsChevaux';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" exact element={Home} /> */}
        <Route path="/jeux" exact element={<Jeux />} />
        <Route path="/jeux/petits-chevaux" exact element={<PetitsChevaux />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
