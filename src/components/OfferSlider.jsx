import React from "react";
import Categories from "./Categories"
import offer1 from "../images/offers/offer1.jpg";
import offer2 from "../images/offers/offer2.jpg";
import offer3 from "../images/offers/offer3.jpg";
import offer4 from "../images/offers/offer4.jpg";
import offer5 from "../images/offers/offer5.jpg";

function OfferSlider(props) {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide container-fluid container mt-4"
        dataRide="carousel"
        style={{boxShadow: "0 10px 15px -15px #111"}}
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
            style={{
              backgroundColor: "#505050",
              width: "5px",
              height: "5px",
              borderRadius: "100%",
            }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            style={{
              backgroundColor: "#505050",
              width: "5px",
              height: "5px",
              borderRadius: "100%",
            }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
            style={{
              backgroundColor: "#505050",
              width: "5px",
              height: "5px",
              borderRadius: "100%",
            }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="3"
            style={{
              backgroundColor: "#505050",
              width: "5px",
              height: "5px",
              borderRadius: "100%",
            }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="3"
            style={{
              backgroundColor: "#505050",
              width: "5px",
              height: "5px",
              borderRadius: "100%",
            }}
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block center-block w-100"
              src={offer1}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block center-block w-100"
              src={offer2}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block center-block w-100"
              src={offer3}
              alt="Third slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block center-block w-100"
              src={offer4}
              alt="Third slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block center-block w-100"
              src={offer5}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="px-2 py-2" style={{ backgroundColor: "#505050" }}>
            Previous
          </span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="px-2 py-2" style={{ backgroundColor: "#505050" }}>
            Next
          </span>
        </a>
      </div>
      <Categories/>
    </div>
  );
}

export default OfferSlider;
