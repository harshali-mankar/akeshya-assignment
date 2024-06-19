import React from 'react'

const RangeSlider = () => {

  return (
    <>
 
    <div className='rs-container full'>
    <div className='si-scoreTxtWrp'>
          <div className='si-scoreTxt'>
                <span>181-200</span>
                <span className='si-correctAns'>20</span>
              </div>
          <label>Score</label>
        </div>
      <div className='rs-inner-container'>

        <svg viewBox="0 0 170 170" style={{height: '142px', width: '142px'}}>
          <circle id="bar" r={77} cx={85} cy={85} fill="transparent" strokeDashoffset={0}  transform="rotate(-90,85,85)" />         
          <path className="rs-transition rs-border" fill="#fff" fillOpacity={0.1}  d="M 0.5 84.99999999999999 A 1 1 0 0 1 169.5 85 A 1 1 0 0 1 0.5 85.00000000000001 L 19.5 85.00000000000001 A 1 1 0 0 0 150.5 85 A 1 1 0 0 0 19.5 84.99999999999999 L 0.5 84.99999999999999 Z" style={{strokeWidth: '1px'}} />
        </svg>

        <div className="rs-bar rs-transition rs-first" style={{zIndex: 8, transform: 'rotate(190.8deg)'}}>
          <div className="rs-handle rs-move kkr-arrow-type-2" />
        </div>
      </div>
    </div>

    </>
    
  )
}

export default RangeSlider