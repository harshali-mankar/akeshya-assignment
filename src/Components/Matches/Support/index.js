import React from 'react'
import config from "../../../Common/config";

const SupportedStrip = () => {
  return (
    <>
      <div className='si-supportStrip'>
        <span>Supported by:</span>
        <span><img src={`${config.IMG_BASE}support/visit-trinidad-strip.png`} alt="KKR flag" /></span>
      </div>
    </>

  )
}

export default SupportedStrip