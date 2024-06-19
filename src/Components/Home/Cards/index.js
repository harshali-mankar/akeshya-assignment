import React from 'react'
import config from "../../../Common/config";
import Modal from '../../../ReusableComponents/Overlays';

const HmCard = () => {
  return (
    <>
      <div className='si-hmCard'>
          <div className='si-hmCardTop'>
            <div className='si-teamVs'>
              <span className='si-active' style={{ backgroundImage: `url(${config.IMG_BASE}team-logo/kkr.png)`}}></span>
              <span style={{ backgroundImage: `url(${config.IMG_BASE}team-logo/kkr.png)`}}></span>
            </div>
            <div className='si-matchStatus si-upcoming'>
                <span>Upcoming</span>
            </div>
          </div>
          <div className='si-hmCardCont'>
            <div className='si-hmCardHead'>
              <div className='si-headLeft'><span>Predict <br />& Win</span></div>
              <div className='si-headRight'>
                
                <img
            src={`${config.IMG_BASE}home-predict-to-win.png`}
            alt=""
          />
              </div>
            </div>
            <div className='si-hmCardDesc'>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>
          </div>
      </div>
      <div className='si-hmCard'>
          <div className='si-hmCardTop'>
            <div className='si-teamVs'>
              <span className='si-active' style={{ backgroundImage: `url(${config.IMG_BASE}team-logo/kkr.png)`}}></span>
              <span style={{ backgroundImage: `url(${config.IMG_BASE}team-logo/kkr.png)`}}></span>
            </div>
            <div className='si-matchStatus si-live'>
                <span>Live</span>
            </div>
          </div>
          <div className='si-hmCardCont'>
            <div className='si-hmCardHead'>
              <div className='si-headLeft'><span>Bingo with<br /> KKRiders</span></div>
              <div className='si-headRight'>
                
                <img
            src={`${config.IMG_BASE}home-bingo.png`}
            alt=""
          />
              </div>
            </div>
            <div className='si-hmCardDesc'>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>
          </div>
      </div>
      <Modal/>
      {/* <div className='si-loader' style={{display: 'none'}}> */}
      <div className='si-loader' style={{display: 'none'}}>
         
        <img
              src={`${config.IMG_BASE}loading.gif`}
              alt=""
            />
        
      </div>
    </>
    
  )
}

export default HmCard