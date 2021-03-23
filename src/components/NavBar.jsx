import React from "react";
import Logo from "../images/logo.png";

function NavBar(props) {
  return (
      <nav
        className="navbar navbar-expand-lg navbar-light shadow-sm px-0 py-0"
        style={{ fontFamily: "Arial, Helvetica, sans-serif"}}
      >
        <div className="container container-fluid px-0">
          <a className="navbar-brand py-1" href="/">
            <img className="img-fluid " src={Logo} alt="logo" />
          </a>
          <div
            className="navbar-toggler align-contents-center py-2 px-2 border-0 mr-3"
            dataToggle="collapse"
            dataTarget="#navbarSupportedContent"
            style={{ backgroundColor: "#D0D0D0" }}
          >
            <a className="nav-item align-items-center pt-3" href="/cart">
              <h5>
                <span className="pr-3">
                  <i
                    className="fas fa-shopping-cart fa-lg"
                    style={{ color: "#bf2756" }}
                  ></i>
                </span>
                <small className="align-self-center text-dark font-weight-light" style={{fontSize:"0.5rem"}}>
                  0 items
                </small>
              </h5>
            </a>
          </div>
          <div
            className="collapse navbar-collapse align-items-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mx-5 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" ariaCurrent="page" href="/">
                  <h5 className="font-weight-bold" style={{fontSize:"0.8rem"}}>Home</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  <h5 className="font-weight-bold" style={{fontSize:"0.8rem"}}>Products</h5>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <div className="col">
                <div className="row mx-0 justify-content-end">
                  <li>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      <li className="nav-item mr-auto">
                        <a
                          className="nav-link font-weight-bold"
                          ariaCurrent="Sign up"
                          href="/signup"
                        >
                          <small className="font-weight-bold" style={{fontSize:"0.5rem"}}>Sign up</small>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link font-weight-bold"
                          ariaCurrent="Register"
                          href="/register"
                        >
                          <small className="font-weight-bold" style={{fontSize:"0.5rem"}}>Register</small>
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
                <div className="row mx-0 ">
                  <li
                    className="nav-item align-items-center"
                    style={{ backgroundColor: "#D0D0D0" }}
                  >
                    <a
                      className="nav-link align-items-center py-2 px-2"
                      href="/cart"
                    >
                      <h5>
                        <span className="pr-3">
                          <i
                            className="fas fa-shopping-cart fa-sm"
                            style={{ color: "#bf2957" }}
                          ></i>
                        </span>
                        <small className="align-self-center text-dark font-weight-light" style={{fontSize:"0.8rem"}}>
                          0 items
                        </small>
                      </h5>
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;
