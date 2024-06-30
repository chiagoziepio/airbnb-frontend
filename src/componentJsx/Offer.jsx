import React, { useState } from "react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";
import { SiAwssecretsmanager } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import accordion from "../Accordion";
import "../ComponentCSS/offer.css";

const Offer = () => {
  const [opened, setOpened] = useState(null);

  const handleShow = (index) => {
    if (opened == index) {
      return setOpened(null);
    }
    setOpened(index);
  };
  return (
    <div className="offer">
      <div className="innerwidth flexRow offerBx">
        <div className="imgBx">
          <img src="img/9.jpg" alt="" />
        </div>
        <div className="txtpart">
          <div className="flexStart">
            <h3 className="sectionTitle">Offers</h3>
            <p>A patronage to us ensures</p>
          </div>
          <div className="flexCol accordion">
            {accordion.map((offer, index) => (
              <div
                className="accordionBx"
                key={offer.id}
                onClick={() => handleShow(index)}
              >
                <div className="flexRow accordion-header">
                  <p className="icon">
                    <BsGlobeAsiaAustralia />
                  </p>
                  <h4>{offer.value}</h4>
                  <span className={opened == index ? "icon rotate" : "icon"}>
                    <IoIosArrowDown />
                  </span>
                </div>

                {opened == index ? <p className="des">{offer.detail}</p> : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
