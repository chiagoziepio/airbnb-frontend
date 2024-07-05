import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero">
      <div className="whiteBlur"/>
      <div className=" innerwidth flexRow heroBx  ">
        <div className=" flexCol heroTxt ">
          <div className="firstPart">
            <div className="orange-cirle" />
            <p className="firstTxt">
              Planning a vacation or Get-away from stress?
              <br />
              <span>COZY HOMES</span> got you covered
            </p>
            <span className="secondTxt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              nostrum, iure quo sit unde quaerat nam doloremque nobis distinctio
            </span>
          </div>
          <div className="secondPart">
            <form >
              <FaLocationDot size={20} className="icon"/>
              <input type="text" />
            </form>
            <div className=" flexRow stats">
              <div className="flexCenter">
                <span>
                    <CountUp start={1200} end={1295} duration={5}/> <label >+</label>
                </span> 
                <p>Total Airbnbs</p>
              </div>
              <div className="flexCenter">
            
                <span>
                    <CountUp start={12650} end={12700} duration={5}/> <label >+</label>
                </span> 
                <p>Clientele</p>
              </div>
              <div className="flexCenter">
                <span>
                    <CountUp start={1} end={7} duration={5}/> <label >+</label>
                </span> 
                <p>Years of experience</p>
              </div>

            </div>
          </div>
        </div>
        <div className="heroImg">
          <div className="imgBx">
            <img src="img/2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
