import React from 'react'
import Mfeed from "../MenField/Mfeed";
import "./SFC.css"



function SFC() {
  return (
    <div className='sfc'>
        <ul class="nav nav-pills navSelection">
          <li class="nav-item">
            <div class="nav-link btn btn-dark mx-sm-3 mx-1 active" data-toggle="pill" href="#pills-home">Clothing</div>
          </li>
          <li class="nav-item">
            <div class="nav-link btn btn-dark mx-sm-3 mx-1" data-toggle="pill" href="#pills-profile">Grommimg</div>
          </li>
          <li class="nav-item">
            <div class="nav-link btn btn-dark mx-sm-3 mx-1" data-toggle="pill" href="#pills-contact">Accessories</div>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="text-white tab-pane show active" id="pills-home">{<Mfeed/>}</div>
          <div class="text-white tab-pane" id="pills-profile"></div>
          <div class="text-white tab-pane" id="pills-contact"></div>
        </div>
    </div>
 

  )
}

export default SFC