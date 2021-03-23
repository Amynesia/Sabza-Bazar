import React from "react";
import fruits from "../images/category/fruits.png";
import bakery from "../images/category/bakery.png";
import beverages from "../images/category/beverages.png";
import beauty from "../images/category/beauty.png";
import baby from "../images/category/baby.png";

function Categories(props) {
  return (
    <div className="container px-3 mt-3">
      <div
        className="d-flex py-4 flex-row justify-content-around align-items-center"
        style={{ boxShadow: "0 10px 15px -15px #111" }}
      >
        <img className="img-fluid w-25 mt-4" src={fruits} alt="fruits" />
        <div className="text-center d-flex mx-5 flex-column align-items-center">
          <span className="h3 font-weight-bold">Fruits and Vegetables</span>
          <small className="h7 font-weight-normal mt-1">
            A variety of fruits and vegetables
          </small>
          <button
            type="button"
            class="btn btn-danger mt-2"
            style={{ backgroundColor: "#bf2957" }}
          >
            Explore fruits-and-vegetables
          </button>
        </div>
      </div>
      <div
        className="text-center d-flex py-4 flex-row justify-content-around align-items-center"
        style={{ boxShadow: "0 10px 15px -15px #111" }}
      >
        <div className="d-flex mx-5 flex-column align-items-center">
          <span className="h3 font-weight-bold">Bakery, Cakes and Dairy</span>
          <small className=" h7 font-weight-normal mt-1">
            The best cupcakes, cookies, cakes, pies, cheesecakes, fresh
            bread, biscotti, muffins, bagles, fresh coffee, milk and more
          </small>
          <button
            type="button"
            class="btn btn-danger mt-2"
            style={{ backgroundColor: "#bf2957" }}
          >
            Explore bakery-cakes-dairy
          </button>
        </div>
        <img className="img-fluid w-25 mt-4" src={bakery} alt="bakery" />
      </div>
      <div
        className=" text-center d-flex py-4 flex-row justify-content-around align-items-center"
        style={{ boxShadow: "0 10px 15px -15px #111" }}
      >
        <img className="img-fluid w-25 mt-4" src={beverages} alt="beverages" />
        <div className="d-flex mx-5 flex-column align-items-center">
          <span className="h3 font-weight-bold">Beverages</span>
          <small className=" h7 font-weight-normal mt-1">
            Our beverage department will ensure your fridge is always fully
            stocked.Shop for soda, juice, beer and more
          </small>
          <button
            type="button"
            class="btn btn-danger mt-2"
            style={{ backgroundColor: "#bf2957" }}
          >
            Explore beverages
          </button>
        </div>
      </div>
      <div
        className="text-center d-flex py-4 flex-row justify-content-around align-items-center"
        style={{ boxShadow: "0 10px 15px -15px #111" }}
      >
        <div className="d-flex mx-5 flex-column align-items-center">
          <span className="h3 font-weight-bold">Beauty and Hygiene</span>
          <small className=" h7 font-weight-normal mt-1">
            Buy beauty and personal care products online in India at best prices
          </small>
          <button
            type="button"
            class="btn btn-danger mt-2"
            style={{ backgroundColor: "#bf2957" }}
          >
            Explore beauty-hygiene
          </button>
        </div>
        <img className="img-fluid w-25 mt-4" src={beauty} alt="beauty" />
      </div>
      <div
        className="text-center d-flex py-4 flex-row justify-content-around align-items-center"
        style={{ boxShadow: "0 10px 15px -15px #111" }}
      >
        <img className="img-fluid w-25 mt-4" src={baby} alt="baby" />
        <div className="d-flex mx-5 flex-column align-items-center">
          <span className="h3 font-weight-bold">Baby Care</span>
          <small className=" h7 font-weight-normal mt-1">
            Shop online for Baby Products, Diapers, Skin Care Products,etc.
          </small>
          <button
            type="button"
            class="btn btn-danger mt-2"
            style={{ backgroundColor: "#bf2957" }}
          >
            Explore baby
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
