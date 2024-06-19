import React from 'react'
import config from "../../../Common/config";
import PredictButton from "./../PredictButtonStrip";
import ViewPoint from "./../ViewPointsStrip";
 
const MatchesCard = () => {
  return (
    <>
    <div className='si-matchesCardList'>
      <div className='si-noResult'>
          <span className='si-noResultImg'></span>
          <span>Results will be displayed<br /> after match ends.</span>

      </div>
      <div className='si-matchesCard si-live'>
          <div className='si-matchesTop'>
            <div className='si-matchesDetail'>
              <span className='si-matchesDay'>Match 23</span>
              <span className='si-matchesTmLft'>Live</span>
            </div>
            <div className='si-matchesVs'>
              <div className='si-matchesVsTm'>
                <span className='si-tmNm'>KKR</span>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
               </div>
              <div className='si-matchesVsCommon si-matchesDateTm'>
                <span>5 April 2023</span>
                <span>18:30 (IST)</span>
              </div>
              <div className='si-matchesVsTm'>
              <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              </div>
            </div>
            <div className='si-matchesVenus'><span>wankhede stadium</span></div>

          </div>
          <div className='si-matchesBot'>
      
            <ViewPoint/>
          </div>
      </div>
      <div className='si-matchesCard si-result'>
          <div className='si-matchesTop'>
            <div className='si-matchesDetail'>
              <span className='si-matchesDay'>Match 23</span>
              <span className='si-wm'>Women</span>
              <span className='si-supoort'>
                <img src={`${config.IMG_BASE}support/visit-trinidad.png`} alt="KKR flag" />
              </span>
              <span className='si-matchesTmLft'>12h left </span>
            </div>
            <div className='si-matchesVs'>
              <div className='si-matchesVsTm'>
                <span className='si-tmNm'>KKR</span>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              </div>
              <div className='si-matchesVsCommon si-matchesVsTxt'>
                <span>VS</span>
                
              </div>
              <div className='si-matchesVsTm'>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              
              </div>
            </div>
            <div className='si-matchesVenus'><span>wankhede stadium</span></div>

          </div>
          <div className='si-matchesBot'>
            <ViewPoint/>
          </div>
      </div>
      <div className='si-matchesCard si-locked'>
          <div className='si-matchesTop'>
            <div className='si-matchesDetail'>
              <span className='si-matchesDay'>Match 23</span>
              
              <span className='si-supoort'>
                <img src={`${config.IMG_BASE}support/visit-trinidad.png`} alt="KKR flag" />
              </span>
              <span className='si-matchesTmLft'><i className='kkr-lock1'></i>Predictions Locked</span>
            </div>
            <div className='si-matchesVs'>
              <div className='si-matchesVsTm'>
                <span className='si-tmNm'>KKR</span>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              </div>
              <div className='si-matchesVsCommon si-matchesVsTxt'>
                <span>VS</span>
                <span className='si-wm'>Women</span>
              </div>
              <div className='si-matchesVsTm'>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              
              </div>
            </div>
            <div className='si-matchesVenus'><span>wankhede stadium</span></div>

          </div>
          <div className='si-matchesBot'>
            <ViewPoint/>
          </div>
      </div>
      <div className='si-matchesCard si-upcoming'>
          <div className='si-matchesTop'>
            <div className='si-matchesDetail'>
              <span className='si-matchesDay'>Match 23</span>
              <span className='si-wm'>Women</span>
              <span className='si-matchesTmLft'>Upcoming</span>
            </div>
            <div className='si-matchesVs'>
              <div className='si-matchesVsTm'>
                <span className='si-tmNm'>KKR</span>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              </div>
              <div className='si-matchesVsCommon si-matchesVsTxt'>
                <span>VS</span>
                
              </div>
              <div className='si-matchesVsTm'>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              
              </div>
            </div>
            <div className='si-matchesVenus'><span>wankhede stadium</span></div>

          </div>
          <div className='si-matchesBot'>
            <PredictButton/>
          </div>
      </div>
      <div className='si-matchesCard si-completed'>
          <div className='si-matchesTop'>
            <div className='si-matchesDetail'>
              <span className='si-matchesDay'>Match 23</span>
              <span className='si-matchesTmLft'>Completed</span>
            </div>
            <div className='si-matchesVs'>
              <div className='si-matchesVsTm'>
                <span className='si-tmNm'>KKR</span>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              </div>
              <div className='si-matchesVsCommon si-matchesVsTxt'>
                <span>VS</span>
                
              </div>
              <div className='si-matchesVsTm'>
                <span className='si-tmFlg'>
                  <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
                </span>
              
              </div>
            </div>
            <div className='si-matchesVenus'><span>wankhede stadium</span></div>

          </div>
          <div className='si-matchesBot'>
            <PredictButton/>
          </div>
      </div>
    </div>
    </>
    
  )
}

export default MatchesCard