import React from 'react'

const WicketsNotTaken = () => {
  return (
    <>
      <div className='si-noWickets si-disabled'>
          <div className='si-noWicketsWrp'>
            <span>Wickets Not Taken</span>
            <label for="check" className='si-checkBox'>
              <input id='check' type={'checkbox'}/>
              <i className='kkr-tick'></i>
            </label>
            </div> 
      </div>

    </>
    
  )
}

export default WicketsNotTaken