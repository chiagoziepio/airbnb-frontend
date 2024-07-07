import React from "react";
import Apartments from "../Apartment";
import { Link } from "react-router-dom";
import "../ComponentCSS/airbnb.css";

const Airbnbs = () => {
  return (
    <div className="airbnb">
      <div className="innerwidth airbnbBx">
        <div className="flexCenter  intro">
          <h3 className="sectionTitle">Explore our wonderful Apartments</h3>
          <p>We boost to meet your taste</p>
        </div>
        <div className="apartmentbx">
          {Apartments.map((apartment) => (
            <Link to = {`/viewapartment/${apartment.id}`} className="apartmentLink" key={apartment.id}>
              <div className="apartment" >
                <div className="apartmentImg">
                  <img src={apartment.img} alt="" />
                </div>
                <div className="apartmentDetail">
                  <h4>{apartment.title}</h4>
                  <div className=" flexRow price-status">
                    <span className="price">${apartment.rentalPrice}</span>
                    <span className="status">{apartment.status}</span>
                  </div>
                  <p>{apartment.location}</p>
                </div>
                <button
                  className={
                    apartment.status === "occupied"
                      ? "bookingBtn taken"
                      : "bookingBtn free"
                  }
                >
                  Rent now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Airbnbs;
