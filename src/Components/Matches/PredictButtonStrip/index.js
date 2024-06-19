import React from 'react'
import CtaButton from "../../../ReusableComponents/Buttons";

const PredictButton = () => {
  return (
    <>
      {/* <div className='si-matchesPredict si-noPredict'>
      Match Not Predicted


      </div> */}

      <div className='si-matchesPredict '>
        {/* <div className='si-matchesPredictTxt'>
          <span></span>
        </div> */}
        <div class="si-matchesComLft"><span>100K </span><span>users have made predictions</span></div>
        <CtaButton btnClass='si-btn si-btn__primary' btnText='Predict Now' btnIconName='fi-add' btnConfig={{BtnIcon : false}}  />

      </div>
    </>
    
  )
}

export default PredictButton 