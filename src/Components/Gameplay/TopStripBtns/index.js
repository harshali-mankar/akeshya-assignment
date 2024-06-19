import React from 'react'
import config from "../../../Common/config";
import CtaButton from "../../../ReusableComponents/Buttons";

const TopbtnStrip = () => {
  return (
    <>
      <div className='si-gplyTop'>
            <div className='si-teamVs'>
              <span className='si-active'>
                <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
              </span>
              <span>
                <img src={`${config.IMG_BASE}flags/kkr.png`} alt="KKR flag" />
              </span>

            </div>
            {/* Use si-live class for Conditional */}
            <div className='si-matchStatus si-upcoming'>
                <span>12 left</span>
            </div>

            <div class="si-btn__wrp">
              <CtaButton btnClass='si-btn si-btn__secondary' btnText='Back to Matches' btnIconName='fi-add' btnConfig={{BtnIcon : false}}  />
              {/* Conditional buttons */}
              {/* <CtaButton btnClass='si-btn si-btn__primary' btnText='Back to Matches' btnIconName='fi-add' btnConfig={{BtnIcon : false}}  /> */}


            </div>
      </div>

    </>
    
  )
}

export default TopbtnStrip