import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import config from "../../../Common/config";

export default () => {
  return (
    // si-swiperHide
    <Swiper
      className="si-pSelect si-swiper"
      spaceBetween={0}
      slidesPerView={3}
      centeredSlides={true}
      // loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="si-selected">
        <div className="si-yrPrediction">
          <span>Your Prediction</span>
          <b></b>
        </div>
        <div className="si-pSelectImg">
          <img src={`${config.IMG_BASE}/players/player.png`} alt="KKR flag" />

          <label></label>
        </div>
        <div className="si-pName">
          <span>Umesh</span>
          <span>Yadav</span>
        </div>
        <div className="si-pTotalWickets">
          <label>
            Total
            <br /> Wickets
          </label>
          <span>10</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className="si-correct">
        <div className="si-yrPrediction">
          <span>Your Prediction</span>
          <b></b>
        </div>
        <div className="si-pSelectImg">
          <img src={`${config.IMG_BASE}/players/player.png`} alt="KKR flag" />

          <label></label>
        </div>
        <div className="si-pName">
          <span>Umesh</span>
          <span>Yadav</span>
        </div>
        <div className="si-pTotalWickets">
          <label>
            Total
            <br /> Wickets
          </label>
          <span>10</span>
        </div>
      </SwiperSlide>

      {/* use only classes for si-correctAns si-wrongAns scenarios */}
      <SwiperSlide className="si-selected si-wrong">
        <div className="si-pSelectImg">
          <img src={`${config.IMG_BASE}/players/player.png`} alt="KKR flag" />

          <label></label>
        </div>
        <div className="si-pName">
          <span>Umesh</span>
          <span>Yadav</span>
        </div>
        <div className="si-pTotalWickets">
          <label>
            Total
            <br /> Wickets
          </label>
          <span>10</span>
        </div>
      </SwiperSlide>

      <SwiperSlide className="si-selected">
        <div className="si-pSelectImg">
          <img src={`${config.IMG_BASE}/players/player.png`} alt="KKR flag" />

          <label></label>
        </div>
        <div className="si-pName">
          <span>Umesh</span>
          <span>Yadav</span>
        </div>
        <div className="si-pTotalWickets">
          <label>
            Total
            <br /> Wickets
          </label>
          <span>10</span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
