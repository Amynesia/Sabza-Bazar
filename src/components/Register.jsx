import React from "react";

function Register() {
  return (
    <div className="d-flex my-4 flex-row justify-content-center">
      <div className="d-flex flex-column mr-5 mt-3 justify-content-start">
        <h4 className="font-weight-bold" style={{ fontSize: "2rem" }}>
          Sign up
        </h4>
        <small className="h6 font-weight-light" style={{ fontSize: "0.5rem" }}>
          We do not share your personal details with anyone.
        </small>
      </div>
      <div className="d-flex flex-column">
        <form>
          <div className="form-group mb-2">
            <label for="exampleInputFirstName" style={{ fontSize: "0.7rem" }}>
              First Name <sapn style={{ color: "#bf2957" }}>*</sapn>
            </label>
            <input
              type="text"
              style={{ fontSize: "0.7rem" }}
              className="form-control"
              id="exampleInputFirstName"
              aria-describedby="firstnameHelp"
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group mb-2">
            <label for="exampleInputLastName" style={{ fontSize: "0.7rem" }}>
              Last Name <sapn style={{ color: "#bf2957" }}>*</sapn>
            </label>
            <input
              type="text"
              style={{ fontSize: "0.7rem" }}
              className="form-control"
              id="exampleInputLastName"
              aria-describedby="lastnameHelp"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group mb-2">
            <label for="exampleEmail" style={{ fontSize: "0.7rem" }}>
              Email <sapn style={{ color: "#bf2957" }}>*</sapn>
            </label>
            <input
              type="email"
              style={{ fontSize: "0.7rem" }}
              className="form-control"
              id="exampleEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword" style={{ fontSize: "0.7rem" }}>
              Password <sapn style={{ color: "#bf2957" }}>*</sapn>
            </label>
            <input
              type="password"
              style={{ fontSize: "0.7rem" }}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
            />
            <small
              id="passwordHelp"
              style={{ fontSize: "0.7rem" }}
              className="form-text text-muted"
            >
              Please include an uppercase letter, lowercase letter and number
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputConfirmPassword" style={{ fontSize: "0.7rem" }}>
              Confirm Password <sapn style={{ color: "#bf2957" }}>*</sapn>
            </label>
            <input
              type="password"
              style={{ fontSize: "0.7rem" }}
              className="form-control"
              id="exampleInputConfirmPassword"
              placeholder="Confirm Password"
            />
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
