import React, { useContext, useEffect } from "react";
import Apartments from "../Apartment";
import { Link } from "react-router-dom";
import "../ComponentCSS/airbnb.css";
import { Context } from "../context";
import axios from "axios";
import { myApp } from "../context";
import { ReducerTerms } from "../ReducerFile";

const Airbnbs = () => {
  const { dispatch, state } = useContext(Context);
  const apartment = state.apartmentData;
  useEffect(() => {
    const HandleGetApartments = async () => {
      try {
        dispatch({ type: ReducerTerms.FETCH_APARTMENT_START });
        const res = await axios.get(
          "http://localhost:4000/api/airbnb/apartment//getapartments"
        );
        const data = await res.data.msg;
        console.log(data);
        await dispatch({ type: ReducerTerms.FETCH_APARTMENT_SUCCESS, payload: data});
        
      } catch (error) {
        dispatch({
          type: ReducerTerms.FETCH_APARTMENT_ERROR,
          payload: error.response.data.msg,
        });

        console.log(error);
        
      }
    };
    HandleGetApartments();
  }, [dispatch]);
  return (
    <div className="airbnb">
      <div className="innerwidth airbnbBx">
        <div className="flexCenter  intro">
          <h3 className="sectionTitle">Explore our wonderful Apartments</h3>
          <p>We boost to meet your taste</p>
        </div>
        <div className="apartmentbx">
          {Apartments.map((apartment) => (
            <Link
              to={`/viewapartment/${apartment.id}`}
              className="apartmentLink"
              key={apartment.id}
            >
              <div className="apartment">
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
