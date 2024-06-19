import React from 'react'
import config from "../../../Common/config";

const MatchBanner = () => {
  return (
    <>
      <div className='si-matchBanner'>
        
        <div className="si-hmCardHead">
          <div className="si-headLeft">
            <span>Predict <br />&amp; Win</span></div>
          <div className="si-headRight">
            <img src={`${config.IMG_BASE}/home-predict-to-win.png`} alt="KKR flag" />

          </div>
        </div>
      </div>
    </>

  )
}

export default MatchBanner