import React from 'react'

const LdTable = () => {
  return (
    <>
      <div className='si-ldTbl si-ldTblNot'>
        <span className='si-ldTblImg'></span>
        <span>Leaderboard Not<br /> Generated</span>
      </div>
      <div className='si-ldTbl'>
        <div className='si-ldTblRow si-ldTblHd'>
          <div className='si-ldTblCol'>
            <span>Rank</span>
          </div>
          <div className='si-ldTblCol'>
            <span>Name</span>
          </div>
          <div className='si-ldTblCol'>
            <span>Poins</span>
          </div>
        </div>
        <div className='si-ldTblRow si-you si-high'>
          <div className='si-ldTblCol si-rank '>
            <span>25</span>
          </div>
          <div className='si-ldTblCol '>
            <span>Shailesh<label>(You)</label></span>
          </div>
          <div className='si-ldTblCol'>
            <span>556</span>
          </div>
        </div>
        <div className='si-ldTblRow si-low'>
          <div className='si-ldTblCol si-rank '>
            <span>10</span>
          </div>
          <div className='si-ldTblCol'>
            <span>Anoop</span>
          </div>
          <div className='si-ldTblCol'>
            <span>116</span>
          </div>
        </div>
        <div className='si-ldTblRow si-equal'>
          <div className='si-ldTblCol'>
            <span>8</span>
          </div>
          <div className='si-ldTblCol'>
            <span>Sourabh</span>
          </div>
          <div className='si-ldTblCol'>
            <span>56</span>
          </div>
        </div>
        {/* si-active class just for loading animation if required */}
        <div className='si-ldTblRow si-ldTblLoaderWrp si-active'>
          <div className='si-ldTblLoader'>
            <span>Load More</span>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default LdTable