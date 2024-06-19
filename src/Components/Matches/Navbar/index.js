import React from 'react'
import config from "../../../Common/config";

const Nav = () => {
  return (
    <>
      <div className='si-nav'>
        <ul>
          <li><a  href='#'>Matches</a></li>
          <li><a href='#' className='si-active'>Leaderboard</a></li>
          <li><a href='#'>How to Play</a></li>
          <li><a href='#'>Prizes</a></li>
        </ul>
      </div>
    </>
    
  )
}

export default Nav