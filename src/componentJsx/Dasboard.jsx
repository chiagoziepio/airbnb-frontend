import React, { useContext, useEffect } from "react";
import { ReducerTerms } from "../ReducerFile";
import { Context } from "../context";
import axios from "axios";
import "../ComponentCSS/Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Dasboard = () => {
  const { dispatch, state, BASE_URL,handleLogout } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    
    const HandleGetUser = async () => {
      
      try {
        dispatch({
          type: ReducerTerms.VERIFY_USER_START,
        });
        const res = await axios.get(
          `${BASE_URL}/api/airbnb/user/getUser`,{withCredentials: true}
        );
        const data = await res.data.user;
        dispatch({
          type: ReducerTerms.VERIFY_USER_SUCCESS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: ReducerTerms.VERIFY_USER_ERROR,
          payload: error.response.data.msg,
        });
        alert(error.response.data.msg)
        navigate("/");
      }
    };
    HandleGetUser();
  }, [dispatch]);
  const user = state.user;
  const HandleGetBookedApartment = async () => {
    try {
      dispatch({
        type: ReducerTerms.GET_BOOKEDAPARTMENT_START,
      });
      const res = await axios.get(
        `${BASE_URL}/api/airbnb/dashboard/getBookedApartment`,{withCredentials: true}
      );
      const data = await res.data.msg;
      dispatch({
        type: ReducerTerms.GET_BOOKED_APARTMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ReducerTerms.GET_BOOKED_APARTMENT_ERROR,
        payload: error.response.data.msg,
      });
    }
  };
  const bookedApartment = state.bookedApartment;

  return (
    <div className=" dashboard">
      <div className="innerwidth dashboardBx">
        {user.length !== 0 && (
          <div>
            {user.map((use) => (
              <div className="user" key={use.id}>
                <div className=" flexRow felicitation_listing">
                  <h4>
                    {" "}
                    welcome <span>{use.username}</span>
                  </h4>
                  <button>
                    <Link to="/listapartment" className="listingLink">
                      list an aprtment
                    </Link>
                  </button>
                </div>
                <div className=" flexStart BookedApartment">
                  <p>This are apartments you booked</p>
                  <button onClick={HandleGetBookedApartment}>
                    {state.GBA_loading ? "checking..." : "Check"}
                  </button>
                  {bookedApartment !== null && (
                    <div className="bookedApartment_wrapper">
                      {bookedApartment.length !== 0 ? (
                        <div>
                          {bookedApartment.map((Ap) => (
                            <div className="bookedApartmentBx" key={Ap._id}>
                              <div className="bookedApartments">
                                <div className="Ap_name_btn">
                                  <img src={Ap.img} alt={Ap.title} />
                                  <button>cancel</button>
                                </div>
                                <p>{Ap.title}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No booked Apartment</p>
                      )}
                    </div>
                  )}
                </div>
                <button className="logout-btn" onClick={handleLogout}>logout</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dasboard;
