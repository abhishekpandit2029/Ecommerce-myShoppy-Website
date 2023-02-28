import React from "react";
import GirlsFusionfeed from "../Feeds/GirlsFusionfeed";
import GirlsEthnicfeed from "../Feeds/GirlsEthnicfeed";
import GirlsWesternfeed from "../Feeds/GirlsWesternfeed";
import "./GirlsPanel.css";

function GirlsPanel() {
  return (
    <div className="GirlsPanel">
      <ul class="nav nav-pills GirlsnavSelection">
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4 mx-2 active"
            data-toggle="pill"
            href="#pills-home"
          >
            <b>Fusion</b>
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4 mx-2"
            data-toggle="pill"
            href="#pills-profile"
          >
            <b>Ethnic</b>
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4 mx-2"
            data-toggle="pill"
            href="#pills-contact"
          >
            <b>Western</b> 
          </div>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="text-white tab-pane show active" id="pills-home">
          {<GirlsFusionfeed />}
        </div>
        <div class="text-white tab-pane" id="pills-profile">
          {<GirlsEthnicfeed />}
        </div>
        <div class="text-white tab-pane" id="pills-contact">
          {<GirlsWesternfeed />}
        </div>
      </div>
      <div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            marginLeft: "50px",
          }}
        >
          <hr
            style={{
              border: "5px solid #fe8235",
              width: "1px",
              marginRight: "5px",
              borderRadius: "100px",
            }}
          />
          <hr
            style={{
              border: "4px solid #fe8235",
              width: "1px",
              marginRight: "5px",
              borderRadius: "100px",
            }}
          />
          <hr
            style={{
              border: "3.5px solid #fe8235",
              width: "1px",
              marginRight: "7px",
              borderRadius: "100px",
            }}
          />
          <hr
            style={{
              border: "3px solid #fe8235",
              width: "1450px",
              borderRadius: "100px",
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default GirlsPanel;
