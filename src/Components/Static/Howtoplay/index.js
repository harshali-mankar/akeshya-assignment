import React from "react";
import MatchBanner from "../../Matches/Banner";
import Nav from "../../Matches/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import CtaButton from "../../../ReusableComponents/Buttons";
import { Navigation, Pagination } from "swiper";

const Howtoply = () => {
  return (
    <>
      <section className="si-main__wrap">
        <div className="si-main__container">
          <MatchBanner />
          <Nav />
          {/* <Tabs/> */}
          <div className="si-htp si-static">
            <section className="si-htp-sec1">
              <div className="si-htpIcon"></div>
              <div className="si-htp-main">
                <div className="si-htp-step">
                  <span>Step 1</span>
                </div>
                <div className="si-htp-cont">
                  <span>PICK YOUR MATCH</span>
                  <span>Choose your game and start making predictions.</span>
                </div>
              </div>
            </section>
            <section className="si-htp-sec2">
              <div className="si-htp-main">
                <div className="si-htp-step">
                  <span>Step 2</span>
                </div>
                <div className="si-htp-cont">
                  <span>Get on the leaderboard</span>
                  <span>
                    Keep making the right predictions to gain up to 20 points
                    for each question and make your way to the top of the
                    leaderboard.
                  </span>
                </div>
              </div>
              <div className="si-htpIcon"></div>
            </section>
            <section className="si-htp-sec3">
              <div className="si-htpIcon"></div>
              <div className="si-htp-main">
                <div className="si-htp-step">
                  <span>Step 3</span>
                </div>
                <div className="si-htp-cont">
                  <span>Win Big</span>
                  <span>
                    Collect points for every correct prediction you make. Want
                    to double your score for a question? Use the Joker.
                  </span>
                </div>
              </div>
            </section>
          </div>

          <div className="si-htp si-static si-htpFuser">
            <Swiper
              className="si-fisrtUser"
              spaceBetween={0}
              slidesPerView={1}
              // centeredSlides= {true}
              // pagination={true}
              // loop={true}
              // yeh add kiya hai idhar swiper ke liye
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              // yeh add kiya hai idhar swiper ke liye
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <section className="si-htp-sec1">
                  <div className="si-htpIcon"></div>
                  <div className="si-htp-main">
                    <div className="si-htp-step">
                      <span>Step 1</span>
                    </div>
                    <div className="si-htp-cont">
                      <span>PICK YOUR MATCH</span>
                      <span>
                        Choose your game and start making predictions.
                      </span>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="si-htp-sec2">
                  <div className="si-htpIcon"></div>
                  <div className="si-htp-main">
                    <div className="si-htp-step">
                      <span>Step 2</span>
                    </div>
                    <div className="si-htp-cont">
                      <span>Get on the leaderboard</span>
                      <span>
                        Keep making the right predictions to gain up to 20
                        points for each question and make your way to the top of
                        the leaderboard.
                      </span>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="si-htp-sec3">
                  <div className="si-htpIcon"></div>
                  <div className="si-htp-main">
                    <div className="si-htp-step">
                      <span>Step 3</span>
                    </div>
                    <div className="si-htp-cont">
                      <span>Win Big</span>
                      <span>
                        Collect points for every correct prediction you make.
                        Want to double your score for a question? Use the Joker.
                      </span>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            </Swiper>
            <div className="si-btn-next">
              <CtaButton
                btnClass="si-btn si-btn__primary"
                btnText="Next"
                btnIconName="kkr-arrow-type-1"
                btnConfig={{ BtnIcon: true }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howtoply;
