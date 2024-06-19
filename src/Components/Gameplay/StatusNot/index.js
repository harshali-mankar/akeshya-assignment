import React from "react";
import config from "../../../Common/config";

const StatusNot = () => {
  return (
    <>
      <div className="si-statusNotWrp">
        {/* use below markup for si-correct class  */}
        {/* <div className='si-statusNot si-correctAns'> */}
        {/* <div className='si-statusNot si-wrongAns'>
              <div className='si-statusNotTxt'>No Wickets Taken</div>
              <label></label>
              
        </div> */}
        <div className="si-pSelectImgWrp">
          <div className="si-pSelectImg si-correctAns">
            <img src={`${config.IMG_BASE}/players/player.png`} alt="KKR flag" />
            <label></label>
          </div>
          <div class="si-pName">
            <span>Sharudal</span>
            <span>Thakur</span>
          </div>
        </div>
        <div className="si-pSelectImgWrp">
          <div className="si-pSelectImg si-correctAns">
            <img src={`${config.IMG_BASE}/players/player.png`} alt="KKR flag" />
            <label></label>
          </div>
          <div class="si-pName">
            <span>Sharudal</span>
            <span>Thakur</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusNot;
