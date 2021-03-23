import React, { Component } from "react";
import Categories from "./Categories";
import { getBanners } from "../request";

class OfferSlider extends Component {
  static LOADING = "LOADING";
  static LOADED = "LOADED";
  static ERROR_LOADING = "ERROR_LOADING";

  state = {
    status: OfferSlider.LOADING,
  };

  render() {
    const { status, banners, error } = this.state;
    let el = null;

    switch (status) {
      case OfferSlider.LOADING:
        el = (
          <div className="alert alert-primary">
            We are fetching workshops. Please wait
          </div>
        );
        break;
      case OfferSlider.LOADED:
        el = (
          <>
            {
            banners.map((ads,index) => {
              if(index === 0){
                return (
                  <div className="carousel-item active">
                  <img
                    className="d-block center-block w-100"
                    src={process.env.PUBLIC_URL + ads.bannerImageUrl}
                    alt={ads.bannerImageAlt}
                  />
                </div>
                )
              }
              return (
                <div className="carousel-item">
                  <img
                    className="d-block center-block w-100"
                    src={process.env.PUBLIC_URL + ads.bannerImageUrl}
                    alt={ads.bannerImageAlt}
                  />
                </div>
              );
            })}
          </>
        );
        break;
      case OfferSlider.ERROR_LOADING:
        el = <div className="alert alert-danger">{error.message}</div>;
        break;
      default:
        el = null;
    }

    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide container-fluid container mt-4"
          data-ride="carousel"
          style={{ boxShadow: "0 10px 15px -15px #111" }}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
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
              data-slide-to="4"
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
          <div className="carousel-inner">{el}</div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="px-2 py-2" style={{ backgroundColor: "#505050" }}>
              Previous
            </span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="px-2 py-2" style={{ backgroundColor: "#505050" }}>
              Next
            </span>
          </a>
        </div>
        <Categories />
      </div>
    );
  }

  componentDidMount() {
    getBanners()
      .then((banners) => {
        this.setState({
          status: OfferSlider.LOADED,
          banners,
        });
      })
      .catch((error) => {
        this.setState({
          status: OfferSlider.ERROR_LOADING,
          error,
        });
      });
  }
}

export default OfferSlider;
