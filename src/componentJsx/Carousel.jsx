import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import sliderOpts from "../swiperUtils";
import "Swiper/css";
import hotPicks from "../Hotpicks";
import "../ComponentCSS/carousel.css";

const CarouselBtn = () => {
  const swiperbtn = useSwiper();
  return (
    <div className="carouselbtn">
      <button onClick={() => swiperbtn.slidePrev()}>&lt;</button>
      <button onClick={() => swiperbtn.slideNext()}>&gt;</button>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className=" Carousel">
      <div className="innerwidth hotPicks">
        <div className="flexStart">
          <h3 className="sectionTitle">Hot Picks</h3>
          <p>Best choices based on stats</p>
        </div>

        <Swiper {...sliderOpts}>
          <CarouselBtn />
          {hotPicks.map((hotpick, index) => (
            <SwiperSlide key={index}>
              <div className="hotPickCard">
                <div className="imgWrapper">
                  <img src={hotpick.img} alt="" className="hotPickImg" />
                </div>
                <div className="hotPickTxt">
                  <h4>{hotpick.title}</h4>
                  <div className="loc-price">
                    <p>
                      <span>$</span>
                      {hotpick.rentalPrice}
                    </p>
                    <span>{hotpick.location}</span>
                  </div>
                  <p className="des">{hotpick.des}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
