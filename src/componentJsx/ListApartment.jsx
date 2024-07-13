import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import { ReducerTerms } from "../ReducerFile";
import axios from "axios";
import "../ComponentCSS/ListApartment.css";
import { useNavigate } from "react-router-dom";
const ListApartment = () => {
  const { dispatch, state, BASE_URL } = useContext(Context);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [bed, setBed] = useState("");
  const [room, setRoom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const handleListApartment = async (e) => {
    e.preventDefault();
    try {
      dispatch({
        type: ReducerTerms.POST_APARTMENT_START,
      });
      const res = await axios.post(
        `${BASE_URL}/api/airbnb/apartment/createApartment`,
        { title, des, status, rentalPrice, bed, room, bathroom, location }
      );
      const data = await res.data.msg;
      dispatch({
        type: ReducerTerms.POST_APARTMENT_SUCCESS,
      });
      alert(data);
      navigate("/airbnbs");
    } catch (error) {
      console.log(error);
      dispatch({
        type: ReducerTerms.POST_APARTMENT_ERROR,
      });
      alert(error.response.data.msg);
    }
  };
  return (
    <div className="listApartment">
      <div className="innerwidth listApartmentBx">
        <form on onSubmit={handleListApartment}>
          <h3>List Apartment</h3>
          <div className="input-control">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="aparment name"
              required
            />
          </div>
          <div className="input-control">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="city and country"
            />
          </div>
          <div className="input-control">
            <input
              type="text"
              value={bed}
              onChange={(e) => setBed(e.target.value)}
              required
              placeholder="number of beds"
            />
          </div>
          <div className="input-control">
            <input
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
              placeholder="number of rooms"
            />
          </div>
          <div className="input-control">
            <input
              type="text"
              value={bathroom}
              onChange={(e) => setBathroom(e.target.value)}
              required
              placeholder="number of bathroom"
            />
          </div>

          <div className="input-control">
            <input
              type="text"
              value={rentalPrice}
              onChange={(e) => setRentalPrice(e.target.value)}
              required
              placeholder="rental Price"
            />
          </div>
          <div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="status of apartment"
              required
            >
              <option value="">select the status</option>
              <option value="free">Free</option>
              <option value="occupied">Occupied</option>
            </select>
          </div>
          <div>
            <textarea
              value={des}
              onChange={(e) => setDes(e.target.value)}
              placeholder="describe the apartment briefly"
            ></textarea>
          </div>
          <button type="submit">
            {state.LA_loading ? "loading...." : "List"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListApartment;
