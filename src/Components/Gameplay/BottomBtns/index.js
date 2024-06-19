import React from 'react'

const BottomBtns = () => {
  return (
    <>
      <div className='si-bottomBtns'>
         <div className='si-gplyBtn si-jockerBtn'>
            <span><i className='kkr-jocker'></i>Use Joker</span>
         </div>
         <div className='si-gplyBtn si-jockerBtnActive'>
            <span><i className='kkr-jocker'></i>Use Joker Activated</span>
         </div>
         
         {/* Use classes for si-wrong and si-correct for correct answer */}
         {/* <div className='si-gplyBtn si-ptsBtn si-correct'>
            <span>You Scored<b>+40</b>Pts</span>
         </div> */}
         

      </div>

    </>
    
  )
}

export default BottomBtns