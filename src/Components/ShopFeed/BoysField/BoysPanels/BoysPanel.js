import React from "react";
import BoysFestivefeed from "../Feeds/BoysFestivefeed";
import BoysWesternfeed from "../Feeds/BoysWesternfeed";
import "./BoysPanel.css";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function BoysPanel() {
  return (
    <div className="BoysPanel">
      <div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            marginLeft: "40px",
            marginBottom: "30px",
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
      <ul class="nav nav-pills BoysnavSelection">
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4 mr-1 active"
            data-toggle="pill"
            href="#pills-Western"
          >
            <b className="navHeading">Western</b>
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link btn btn-dark mx-md-4 mr-1"
            data-toggle="pill"
            href="#pills-Festive"
          >
            <b className="navHeading">Festive</b>
          </div>
        </li>
        <li className="bNavigator">
          <Link to="/boysshop" style={{ color: "#fe8235" }}>
            <ArrowCircleRightIcon fontSize="medium" />
          </Link>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="text-white tab-pane show active" id="pills-Western">
          {<BoysWesternfeed />}
        </div>
        <div class="text-white tab-pane" id="pills-Festive">
          {<BoysFestivefeed />}
        </div>
      </div>
    </div>
  );
}

export default BoysPanel;
