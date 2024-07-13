import React, { useContext, useEffect } from "react";
import Apartments from "../Apartment";
import { Link, useNavigate } from "react-router-dom";
import "../ComponentCSS/airbnb.css";
import { Context } from "../context";
import axios from "axios";
import { myApp } from "../context";
import { ReducerTerms } from "../ReducerFile";

const Airbnbs = () => {
  const { dispatch, state, BASE_URL, handleBookApartment } =
    useContext(Context);
  const apartments = state.apartmentData;
  const navigate = useNavigate()
  useEffect(() => {
    const HandleGetApartments = async () => {
      try {
        dispatch({ type: ReducerTerms.FETCH_APARTMENT_START });
        const res = await axios.get(
          "http://localhost:4000/api/airbnb/apartment/getapartments"
        );
        const data = await res.data.msg;
        await dispatch({
          type: ReducerTerms.FETCH_APARTMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: ReducerTerms.FETCH_APARTMENT_ERROR,
          payload: error.response.data.msg,
        });
        alert(error.response.data.msg)
       navigate("/login")

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
        {state.FA_loading ? (
          <p style ={{
            fontSize: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"4.5rem"
          }}>Fetching apartments....</p>
        ) : (
          <div>
            {apartments.length ? (
              <div className="apartmentbx">
                {apartments.map((apartment, index) => (
                  <div className="apartment">
                    <Link
                      to={`/viewapartment/${apartment._id}`}
                      className="apartmentLink"
                      key={index}
                    >
                      <div className="apartmentImg">
                        <img src={apartment.img} alt="" />
                      </div>
                    </Link>

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
                      onClick={() => handleBookApartment(apartment._id)}
                    >
                      {state.BA_loading ? "booking.." : "Book now"}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Listed apartment to display</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Airbnbs;
