import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Jeux from './views/Jeux';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" exact element={Home} /> */}
        <Route path="/jeux" exact element={<Jeux />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
