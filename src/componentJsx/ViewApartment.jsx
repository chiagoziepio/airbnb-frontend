import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Apartment from "../Apartment";
import axios from "axios";
import { ReducerTerms } from "../ReducerFile";
import { Context } from "../context";
import "../ComponentCSS/ViewApartment.css";

const ViewApartment = () => {
  const { id } = useParams();
  const { dispatch, state, BASE_URL, handleBookApartment } = useContext(Context);
  /* const convertedId = Number(id);
  const theApartment = Apartment.filter((apart) => apart.id === convertedId); */
  useEffect(() => {
    const HandleGetOneApartment = async () => {
      try {
        dispatch({
          type: ReducerTerms.FETCH_ONE_APARTMENT_START,
        });
        const res = await axios.get(`${BASE_URL}/api/airbnb/apartment/${id}`);
        const data = await res.data.msg;
        dispatch({
          type: ReducerTerms.FETCH_ONE_APARTMENT_SUCCESS,
          payload: data,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
        dispatch({
          type: ReducerTerms.FETCH_ONE_APARTMENT_ERROR,
        });
        alert(error.response.data.msg);
      }
    };
    HandleGetOneApartment();
  }, [dispatch]);
  const theApartment = state.one_apartment;
  console.log(theApartment);
  return (
    <div className="viweApartment">
      <div className="veiwApartmentBx innerwidth">
        {state.GOA_loading ? (
          <p
            style={{
              fontSize: "2.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4.5rem",
            }}
          >
            Fetching specific Apartment....
          </p>
        ) : (
          <div >
            {theApartment.length && (
              <div className="apartmentandmap">
                {theApartment.map((apart) => (
                  <div className="DApartment" key={apart._id}>
                    <div className="flexRow title-status">
                      <h4>{apart.title}</h4>
                      <span className="status">{apart.status}</span>
                    </div>
                    <div className="apartImg">
                      <img src={apart.img} alt={`apartment: ${apart._id}`} />
                    </div>
                    <div className="other-detail">
                      <span>${apart.rentalPrice}</span>
                      <p className="apartmentLocation">{apart.location}</p>
                      <p className="details">{apart.des}</p>
                    </div>
                    <div className="features">
                      <p>Apartment Features</p>
                      <div>
                      <span>
                        Beds:{apart.bed}
                      </span>
                      <span>
                        Bathrooms:{apart.bathroom}
                      </span>
                      <span>
                        Rooms:{apart.room}
                      </span>

                      </div>
                      
                    </div>
                    <button
                      className={
                        apart.status === "occupied"
                          ? "bookingBtn taken"
                          : "bookingBtn free"
                      }
                      onClick={() => handleBookApartment(apart._id)}
                    >
                      {state.BA_loading ? "booking.." : "Book now"}
                    </button>
                  </div>
                ))}
                <div>map</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewApartment;
