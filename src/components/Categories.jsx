/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { getCategories } from "../request";

class Categories extends Component {
  static LOADING = "LOADING";
  static LOADED = "LOADED";
  static ERROR_LOADING = "ERROR_LOADING";

  state = {
    status: Categories.LOADING,
  };

  render() {
    const { status, categories, error } = this.state;
    let el = null;
    let count = 0;

    switch (status) {
      case Categories.LOADING:
        el = (
          <div className="alert alert-primary">
            We are fetching workshops. Please wait
          </div>
        );
        break;
      case Categories.LOADED:
        el = (
          <div>
            {
              (categories.sort(function (a, b) {
                return a.order - b.order;
              }),
              categories.map((categorie) => {
                if (categorie.enabled === true) {
                  if (count % 2 === 0) {
                    count++;
                    return (
                      <div>
                        <div
                          className="d-flex py-4 flex-row justify-content-around align-items-center"
                          style={{ boxShadow: "0 10px 15px -15px #111" }}
                        >
                          <img
                            className="img-fluid w-25 mt-4"
                            src={process.env.PUBLIC_URL + categorie.imageUrl}
                            alt={categorie.key}
                          />
                          <div className="text-center d-flex mx-5 flex-column align-items-center">
                            <span className="h3 font-weight-bold">
                              {categorie.name}
                            </span>
                            <small className="h7 font-weight-normal mt-1">
                              {categorie.description}
                            </small>
                            <button
                              type="button"
                              className="btn btn-danger mt-2"
                              style={{ backgroundColor: "#bf2957" }}
                            >
                              Explore {categorie.key}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    count++;
                    return (
                      <div>
                        <div
                          className="text-center d-flex py-4 flex-row justify-content-around align-items-center"
                          style={{ boxShadow: "0 10px 15px -15px #111" }}
                        >
                          <div className="d-flex mx-5 flex-column align-items-center">
                            <span className="h3 font-weight-bold">
                              {categorie.name}
                            </span>
                            <small className=" h7 font-weight-normal mt-1">
                              {categorie.description}
                            </small>
                            <button
                              type="button"
                              className="btn btn-danger mt-2"
                              style={{ backgroundColor: "#bf2957" }}
                            >
                              Explore {categorie.key}
                            </button>
                          </div>
                          <img
                            className="img-fluid w-25 mt-4"
                            src={process.env.PUBLIC_URL + categorie.imageUrl}
                            alt={categorie.key}
                          />
                        </div>
                      </div>
                    );
                  }
                } else {
                  return null;
                }
              }))
            }
          </div>
        );
        break;
      case Categories.ERROR_LOADING:
        el = <div className="alert alert-danger">{error.message}</div>;
        break;
      default:
        el = null;
    }

    return <div className="container px-3 mt-3">{el}</div>;
  }

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({
          status: Categories.LOADED,
          categories,
        });
      })
      .catch((error) => {
        this.setState({
          status: Categories.ERROR_LOADING,
          error,
        });
      });
  }
}

export default Categories;
