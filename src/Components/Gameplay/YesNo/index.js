import React from 'react'

const YesNo = () => {
  return (
    <>
    {/* si-correct, si-wrong , si-live, si-notSelected*/}
      <div className='si-btnYnWrp si-post si-notSelected'>
          <div className='si-btnYn si-active'>
            <div className='si-yrPrediction'>
                <span>Your Prediction</span>
                <b></b>
            </div> 
            <span>Yes</span></div>
          {/* <div className='si-btnYn si-wrongAns'><span>Yes</span></div> */}
          <div className='si-or'>or</div>
          <div className='si-btnYn'><span>No</span></div>
          {/* <div className='si-btnYn si-correctAns'><span>No</span></div> */}
      </div>

    </>
    
  )
}

export default YesNo