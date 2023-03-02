import React from "react";
import { EthnicForGirls } from "../../ShopFeed/GirlsField/API/Girlsapi";
import { WesternForGirls } from "../../ShopFeed/GirlsField/API/Girlsapi";
import FusionForGirls from "../../ShopFeed/GirlsField/API/Girlsapi";
import Cards from "../../ShopFeed/Source/Cards";
import "./Girlsshoppy.css";

function Girlsshoppy() {
  return (
    <div className="Girlsshoppy">
      <ul class="nav nav-pills GirlsShoppySelection">
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4 active"
            data-toggle="pill"
            href="#pills-home"
          >
            <b className="navHeading">Fusion</b>
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4"
            data-toggle="pill"
            href="#pills-profile"
          >
            <b className="navHeading">Ethnic</b>
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4"
            data-toggle="pill"
            href="#pills-contact"
          >
            <b className="navHeading">Western</b>
          </div>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="text-white tab-pane show active" id="pills-home">
          <div className="gShoppy">
            {FusionForGirls.map((e) => {
              const { id } = e;
              return (
                <div className="shoppyCards">
                  <Cards key={id} {...e} />
                </div>
              );
            })}
          </div>
        </div>

        <div class="text-white tab-pane" id="pills-profile">
          <div className="gShoppy">
            {EthnicForGirls.map((e) => {
              const { id } = e;
              return (
                <div className="shoppyCards">
                  <Cards key={id} {...e} />
                </div>
              );
            })}
          </div>
        </div>

        <div class="text-white tab-pane" id="pills-contact">
          <div className="gShoppy">
            {WesternForGirls.map((e) => {
              const { id } = e;
              return (
                <div className="shoppyCards">
                  <Cards key={id} {...e} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Girlsshoppy;
