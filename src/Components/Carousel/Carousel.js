import React from "react";
import "./Carousel.css";
import a from "../Stuff/CarouselImage/a.jpg";
import b from "../Stuff/CarouselImage/b.jpg";
import c from "../Stuff/CarouselImage/c.jpg";
import d from "../Stuff/CarouselImage/d.jpg";
import e from "../Stuff/CarouselImage/e.jpg";

function Carousel() {
  return ( 
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
        data-interval="2000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block cimage w-100" src={a} alt="fSlide" />
          </div>
          <div class="carousel-item">
            <img class="d-block cimage w-100" src={b} alt="fSlide" />
          </div>
          <div class="carousel-item">
            <img class="d-block cimage w-100" src={c} alt="fSlide" />
          </div>
          <div class="carousel-item">
            <img class="d-block cimage w-100" src={d} alt="fSlide" />
          </div>
          <div class="carousel-item">
            <img class="d-block cimage w-100" src={e} alt="fSlide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
