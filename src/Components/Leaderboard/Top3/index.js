import React from 'react'
import config from "../../../Common/config";

const Top3 = () => {
  return (
    <>
      <div className='si-top3'>
        <div className='si-top3-user '>
          <div className='si-top3-img'>
          <img src={`${config.IMG_BASE}/players/player.png`} alt="KKR flag" />

            <label className='si-medal si-2nd'><span>2</span></label>
          </div>
          <div className='si-top3-bot '>
            <div className='si-top3-userNm'>
              Vaibhav
            </div>
            <div className='si-top3-userPts'>
              <span>1500</span>
              <label>Pts</label>
            </div>
          </div>
        </div>
        <div className='si-top3-user '>
          <div className='si-top3-img'>
          <img src={`${config.IMG_BASE}/players/player.png`} alt="KKR flag" />

            <label className='si-medal si-1st'><span>1</span></label>
          </div>
          <div className='si-top3-bot si-loggedIn'>
            <div className='si-top3-userNm'>
              Vaibhav (You)
            </div>
            <div className='si-top3-userPts'>
              <span>1500</span>
              <label>Pts</label>
            </div>
          </div>
        </div>
        <div className='si-top3-user '>
          <div className='si-top3-img si-notSelected'>
            <img src={`${config.IMG_BASE}/default-user.png`} alt="KKR flag" />
            <label className='si-medal si-3rd'><span>3</span></label>
          </div>
          <div className='si-top3-bot'>
            <div className='si-top3-userNm'>
              Vaibhav
            </div>
            <div className='si-top3-userPts'>
              <span>1500</span>
              <label>Pts</label>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Top3