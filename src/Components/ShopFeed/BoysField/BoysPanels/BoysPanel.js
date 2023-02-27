import React from 'react'
import BoysFestivefeed from '../Feeds/BoysFestivefeed'
import BoysWesternfeed from '../Feeds/BoysWesternfeed'
import "./BoysPanel.css"



function GirlsPanel() {
  return (
    <div className='sfc'>
        <ul class="nav nav-pills navSelection">
          <li class="nav-item">
            <div class="nav-link btn btn-dark mx-md-4 mx-2 active" data-toggle="pill" href="#pills-Western">Western</div>
          </li>
          <li class="nav-item">
            <div class="nav-link btn btn-dark mx-md-4 mx-2" data-toggle="pill" href="#pills-Festive">Festive</div>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="text-white tab-pane show active" id="pills-Western">{<BoysWesternfeed/>}</div>
          <div class="text-white tab-pane" id="pills-Festive">{<BoysFestivefeed/>}</div>
        </div>
    </div>
 

  ) 
}

export default GirlsPanel