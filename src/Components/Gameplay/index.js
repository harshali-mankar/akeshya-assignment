import React from "react";
import CtaButton from "../../ReusableComponents/Buttons";
import CircleDrag from "../CircleDrag";
import MatchBanner from "../Matches/Banner";
import Nav from "../Matches/Navbar";
import BallRange from "./BallRange";
import BottomBtns from "./BottomBtns";
import ButtonSLider from "./ButtonSlider";
import JokerStrip from "./JokerStrip";
import LockStrip from "./LockStrip";
import Notification from "./Notification";
import GameplayPagination from "./Pagination";
import PlayerSelection from "./PlayerSelection";
import Points from "./Points";
import Question from "./Questions";
import RangeSlider from "./RangeSlider";
import ScoreRange from "./ScoreRange";
import StatusNot from "./StatusNot";
import TopbtnStrip from "./TopStripBtns";
import WicketsNotTaken from "./WicketsNotTaken";
import YesNo from "./YesNo";
import config from "./../../Common/config";

const Gameplay = () => {
  return (
    <>
      <section className="si-main__wrap">
        <div className="si-main__container si-main--gameplay">
          {/* for sticky add class si-active */}
          {/* for all prediction si-correct add correct or si-wrong class */}
          {/* for result add class si-result class */}
          {/* for match live add class si-live class */}
          {/* for match upcoming add class si-upcoming class */}
          {/* si-wrong si-live si-result */}
          <MatchBanner />
          <Nav />
          <div className="si-gply si-active">
            <div className="si-gplyTopSticky">
              <TopbtnStrip />
              <JokerStrip />
              {/* <LockStrip /> */}
            </div>
            <GameplayPagination />
            <Notification />
            <div className="si-gplyTopImg"></div>
            <div className="si-gplyMain">
              {/* for before and after common image used css class si-gplyGraphic else use si-gplyGraphic-1, 2 , 3 etc*/}
              <div className="si-gplyArea si-gplyGraphic">
                <div className="si-gplyWhiteBg"></div>
                <Question />
                <div className="si-gplyMid">
                  <BallRange />
                </div>
                <Points />

                <BottomBtns />
              </div>

              <div className="si-gplyArea">
                <Question />
                <div className="si-gplyMid">
                  <BallRange />
                </div>
                <Points />

                <BottomBtns />
              </div>

              <div className="si-gplyArea si-swiperHide si-pSelect si-gplyGraphic">
                <Question />
                <div className="si-gplyMid">
                  <div className="si-tabtoselect__main">
                    <div className="si-tabtoselect">
                      <span>Tap on the player to select</span>
                    </div>
                    <div className="si-tabtoselect__plr">
                      <div>
                        <span>
                          <img
                            src={`${config.IMG_BASE}/default-player.png`}
                            alt="KKR flag"
                          />
                        </span>
                        <i className="kkr-close"></i>
                      </div>
                      <div className="si-selected">
                        <span>
                          <img
                            src={`${config.IMG_BASE}/players/player.png`}
                            alt="KKR flag"
                          />
                        </span>
                        <i className="kkr-close"></i>
                      </div>
                    </div>
                  </div>
                  <PlayerSelection />
                  <WicketsNotTaken />
                </div>
                <Points />
                <BottomBtns />
              </div>
              <div className="si-gplyArea si-pSelect">
                <Question />
                <div className="si-gplyMid">
                  <div className="si-tabtoselect__main">
                    <div className="si-tabtoselect">
                      <span>Tap on the player to select</span>
                    </div>
                    <div className="si-tabtoselect__plr">
                      <div>
                        <span>
                          <img
                            src={`${config.IMG_BASE}/default-player.png`}
                            alt="KKR flag"
                          />
                        </span>
                        <i className="kkr-close"></i>
                      </div>
                      <div className="si-selected">
                        <span>
                          <img
                            src={`${config.IMG_BASE}/players/player.png`}
                            alt="KKR flag"
                          />
                        </span>
                        <i className="kkr-close"></i>
                      </div>
                    </div>
                  </div>
                  <PlayerSelection />
                  <WicketsNotTaken />
                </div>
                <Points />
                <BottomBtns />
              </div>

              <div className="si-gplyArea si-gplyGraphic">
                <div className="si-gplyWhiteBg"></div>

                <Question />
                <div className="si-gplyMid">
                  <YesNo />
                </div>
                <Points />
                <BottomBtns />
              </div>
              <div className="si-gplyArea">
                <div className="si-gplyWhiteBg"></div>

                <Question />
                <div className="si-gplyMid">
                  <YesNo />
                </div>
                <Points />
                <BottomBtns />
              </div>

              <div className="si-gplyArea si-gplyGraphic">
                <Question />
                <div className="si-gplyMid">
                  {/* <RangeSlider /> */}
                  <CircleDrag />
                </div>
              </div>

              <div className="si-gplyArea">
                <Question />
                <div className="si-gplyMid">
                  <div className="si-tabtoselect">
                    <span>Tap on the player to select</span>
                  </div>
                  <PlayerSelection />
                  <WicketsNotTaken />
                </div>
                <Points />
                <BottomBtns />
              </div>

              <div className="si-gplyArea si-gplyGraphic">
                <Question />
                <div className="si-gplyMid">
                  <ButtonSLider />
                  <ScoreRange />
                </div>
              </div>

              <div className="si-gplyArea ">
                <Question />
                <div className="si-gplyMid">
                  <ButtonSLider />
                  <ScoreRange />
                </div>
              </div>

              <div className="si-gplyArea si-gplyGraphic">
                <Question />
                <div className="si-gplyMid">
                  <StatusNot />
                </div>
                <BottomBtns />
              </div>
              <div className="si-gplyArea si-submitLast">
                <Question />
                <div className="si-gplyMid">
                  <StatusNot />
                </div>
                <BottomBtns />
              </div>

              <div class="si-btn__wrp si-btn-submit">
                <CtaButton
                  btnClass="si-btn si-btn__primary"
                  btnText="Submit Prediction"
                  btnIconName="fi-add"
                  btnConfig={{ BtnIcon: false }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gameplay;
