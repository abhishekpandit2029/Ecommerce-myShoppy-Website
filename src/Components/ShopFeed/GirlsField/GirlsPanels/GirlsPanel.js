import React from 'react'
import GirlsFusionfeed from "../Feeds/GirlsFusionfeed"
import GirlsEthnicfeed from '../Feeds/GirlsEthnicfeed'
import GirlsWesternfeed from '../Feeds/GirlsWesternfeed'
import "./GirlsPanel.css"



function GirlsPanel() {
  return (
    <div className='sfc'>
        <ul class="nav nav-pills navSelection">
          <li class="nav-item">
            <div class="nav-link btn btn-dark mx-md-4 mx-2 active" data-toggle="pill" href="#pills-home">Fusion</div>
          </li>
          <li class="nav-item">
            <div class="nav-link btn btn-dark mx-md-4 mx-2" data-toggle="pill" href="#pills-profile">Ethnic</div>
          </li>
          <li class="nav-item">
            <div class="nav-link btn btn-dark mx-md-4 mx-2" data-toggle="pill" href="#pills-contact">Western</div>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="text-white tab-pane show active" id="pills-home">{<GirlsFusionfeed/>}</div>
          <div class="text-white tab-pane" id="pills-profile">{<GirlsEthnicfeed/>}</div>
          <div class="text-white tab-pane" id="pills-contact">{<GirlsWesternfeed/>}</div>
        </div>
    </div>
 

  ) 
}

export default GirlsPanel