import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light py-2 px-5">
      
        <a class="navbar-brand">
        <Link to="/home" style={{color:"black", textDecoration:"none"}}>
          <small>
            <strong>My</strong>
          </small>
          .<strong>Shoppy</strong> 
          </Link>
        </a>
        
        <button
          class="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><DialpadTwoToneIcon/></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-3">
            <li class="nav-item active">
              <a class="nav-link" href="#">
              <Link to="/home" style={{color:"black", textDecoration:"none"}}>
                Home <span class="sr-only">(current)</span>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Men
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Women
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Features
              </a>
            </li>
            {/* <li class="nav-item basket">
              <img
                class="card-details-img"
                src="https://cdn-icons-png.flaticon.com/512/60/60992.png"
              />
              <sup id="counting" class="counting">
                0
              </sup> 
            </li> */}
            <li class="nav-item">
              <button type="button" class="btn navbtn">
                Sign in
              </button>
            </li>
          </ul>  
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
