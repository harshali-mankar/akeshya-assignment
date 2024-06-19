import React from 'react'

const BallRange = () => {
  return (
    <>
    {/* si-live, si-wrong, si-correct */}
      <div className='si-ballRange'>

          <div className='si-ballRangeValue si-ballRangeValue-a'>
            <div className='si-yrPrediction'>
              <span>Your Prediction</span>
              <b></b>
            </div>
            <label>8</label>
          </div>

          {/* This element is visible for wrong status */}
          <div className='si-ballRangeValue si-ballRangeValue-b'>
            <label>10</label>
          </div>

          <div className='si-ballRangeDrag'>
            <input className='si-ballRangeSlider' id="month-price" type="range" min="1" max="11" value="10" />
            <div className='si-ballRangeLineDraw'>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span className='si-active'></span>
              <span></span>
            </div>
          </div>

      </div>

    </>
    
  )
}

export default BallRange