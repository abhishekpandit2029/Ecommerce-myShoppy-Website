import React from 'react'
import Cards from '../../ShopFeed/Source/Cards';
import "./Boysshoppy.css"
import FestiveForBoys from '../../ShopFeed/BoysField/API/Boysapi';
import { WesternForBoys } from '../../ShopFeed/BoysField/API/Boysapi';

function Boysshoppy() {
  return (
<div className="Girlsshoppy">
      <ul class="nav nav-pills GirlsShoppySelection">
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4 mx-2 active"
            data-toggle="pill"
            href="#pills-home"
          >
            <b>Festive</b>
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4 mx-2"
            data-toggle="pill"
            href="#pills-profile"
          >
            <b>Western</b>
          </div>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="text-white tab-pane show active" id="pills-home">
            <div className='ffgShoppy'>
            {WesternForBoys.map((e) => {
          const { id } = e;
          return <div className='shoppyCards'><Cards key={id} {...e} /></div> ;
        })}
            </div>
        </div>

        <div class="text-white tab-pane" id="pills-profile">
        <div className='ffgShoppy'>
        {FestiveForBoys.map((e) => {
          const { id } = e;
          return <div className='shoppyCards'><Cards key={id} {...e} /></div>;
        })}
        </div>
        </div>

      </div>
    </div>
  );
}

export default Boysshoppy