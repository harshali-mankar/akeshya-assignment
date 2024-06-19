import React from 'react'

const ScoreRange = () => {
  return (
    <>
      <div className='si-scoreRange'>
        <div className='si-scoreTxtWrp'>
          <div className='si-scoreTxt'>
                {/* to highlight si-yrpActive */}
                <span className='si-yrpActive'>181-200         
                   <div className='si-yrPrediction'>
                      <span>Your Prediction</span>
                      <b></b>
                   </div>
               </span>
                <span className='si-correctAns'>20</span>
                
              </div>
          <label className='si-vhidden'>Score</label>
        </div>
        <div className='si-scoreGraph si-active-5--'>
          {/*  si-active-5 for 5 dots*/}
          <div className="si-dot-wrp "> 
            <span className='si-dot si-dot-1'></span>
            <span className='si-dot si-dot-2'></span>
            <span className='si-dot si-dot-3'></span>
            <span className='si-dot si-dot-4'></span>
            <span className='si-dot si-dot-5'></span>
            <span className='si-dot si-dot-6'></span>
            <span className='si-dot si-dot-7'></span>
            <span className='si-dot si-dot-8'></span>
          </div>
          <div className='si-scorePitch'>
            <span className='si-highlight si-highlight-1 si-active'></span>
            <span className='si-highlight si-highlight-2'></span>
            <span className='si-highlight si-highlight-3'></span>
            <span className='si-highlight si-highlight-4'></span>
            <span className='si-highlight si-highlight-5'></span>
            <span className='si-highlight si-highlight-6'></span>
            <span className='si-highlight si-highlight-7'></span>
            <span className='si-highlight si-highlight-8'></span>

          </div>
        </div>

      </div>

    </>
    
  )
}

export default ScoreRange