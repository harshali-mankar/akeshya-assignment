import React from 'react'
import config from "../../../Common/config";
import SupportedStrip from '../../Matches/Support';



const ComingSoon = () => {
  return (
    <>
      <section className="si-main__wrap">

       
        <div className="si-main__container">
          
          
 
          <div className='si-comingSoon si-static'>
            <div className='si-comingSoonTop'>
              <img src={`${config.IMG_BASE}/predictor-eod@2x.png`} alt="KKR flag" />
            </div>
            <div className='si-comingSoonBot'>
              <SupportedStrip/>
              <div className='si-comingSoonTxt'>
                <span>Check your final rank on the leaderboard</span>
              </div>
              <div class="si-btn-wrp">
                <div class="si-btn si-btn__primary"><span>View Leaderboard</span> <i className='kkr-arrow-type-1'></i></div>
              </div>
            </div>

          </div>


        </div>
      </section>

    </>
    
  )
}

export default ComingSoon