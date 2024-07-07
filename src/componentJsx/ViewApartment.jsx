import React from "react";
import { useParams } from "react-router-dom";
import Apartment from "../Apartment";
import "../ComponentCSS/ViewApartment.css";

const ViewApartment = () => {
  const { id } = useParams();
  const convertedId = Number(id);
  const theApartment = Apartment.filter((apart) => apart.id === convertedId);
  return (
    <div className="viweApartment">
      <div className="veiwApartmentBx innerwidth">
        {theApartment.map((apart) => (
          <div className="DApartment" key={apart.id}>
            <div className="flexRow title-status">
              <h4>{apart.title}</h4>
              <span className="status">{apart.status}</span>
            </div>
            <div className="apartImg">
            <img src={apart.img} alt={`apartment: ${apart.id}`} />

            </div>
            <div className="other-detail">
              <span>${apart.rentalPrice}</span>
              <p className="apartmentLocation">{apart.location}</p>
              <p className="details">{apart.des}</p>
            </div>
            <button
              className={
                apart.status === "occupied"
                  ? "bookingBtn taken"
                  : "bookingBtn free"
              }
            >
              Rent now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewApartment;
