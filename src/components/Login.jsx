import React from "react";

function Login() {
  return (
    <div className="d-flex my-4 flex-row justify-content-center">
      <div className="d-flex flex-column mr-5 justify-content-center">
        <h4 className="font-weight-bold" style={{ fontSize: "2rem" }}>
          Login
        </h4>
        <small className="h6 font-weight-light" style={{ fontSize: "0.5rem" }}>
          Get Access to your Orders, Wishlist and Recommendations
        </small>
      </div>
      <div className="d-flex flex-column">
        <form>
          <div className="form-group mb-2">
            <label for="exampleInputEmail1" style={{ fontSize: "0.7rem" }}>
              Email address <sapn style={{ color: "#bf2957" }}>*</sapn>
            </label>
            <input
              type="email"
              style={{ fontSize: "0.7rem" }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" style={{ fontSize: "0.7rem" }}>
              Password <sapn style={{ color: "#bf2957" }}>*</sapn>
            </label>
            <input
              type="password"
              style={{ fontSize: "0.7rem" }}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small
              id="emailHelp"
              style={{ fontSize: "0.7rem" }}
              className="form-text text-muted"
            >
              Please include an uppercase letter, lowercase letter and number
            </small>
          </div>
          <button
            type="submit"
            style={{
              fontSize: "0.7rem",
              width: "100%",
              backgroundColor: "#bf2957",
            }}
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
