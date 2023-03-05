import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Girlsshoppy from "./Components/Shoppy/GirlsShop/Girlsshoppy";
import Boysshoppy from "./Components/Shoppy/BoysShop/Boysshoppy";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import SPMap from "./Components/SelectedProducts/SPMap";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/boysshop" element={<Boysshoppy />} />
          <Route path="/girlsshop" element={<Girlsshoppy />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/basket" element={<SPMap />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
