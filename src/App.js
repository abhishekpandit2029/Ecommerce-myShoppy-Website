import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Girlsshoppy from "./Components/Shoppy/GirlsShop/Girlsshoppy"
import Boysshoppy from "./Components/Shoppy/BoysShop/Boysshoppy"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div> 
    <Router>
      <Navbar />
        <Routes>
          <Route path="/"  element={<Main/>} />
          <Route path="/home"  element={<Main/>} />
          <Route path="/boysshop"  element={<Boysshoppy />} />
          <Route path="/girlsshop"  element={<Girlsshoppy />} />
        </Routes>
      </Router>


    </div>
  );
};

export default App;
