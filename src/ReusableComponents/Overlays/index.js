import React from "react";
import CtaButton from "../Buttons";

const Modal = () => {
  return (
    <>
      <div className="si-pp-wrp si-fade">
        <div className="si-pp">
          <div className="si-ppHead">
            <span className="si-ppHeadTxt">Alert</span>
            <span className="si-close kkr-pop-up-close"></span>
          </div>
          <div className="si-ppBody">
            <p>Going back to matches will reset your predictions</p>
            <div className="si-tmLft">
              <span>You have</span>
              <span>
                <b>12</b>h Left
              </span>
            </div>
            <div className="si-btn-wrp">
              <CtaButton
                btnClass="si-btn si-btn__secondary"
                btnText="Back to Matches"
                btnIconName="fi-add"
                btnConfig={{ BtnIcon: false }}
              />
              <CtaButton
                btnClass="si-btn si-btn__primary"
                btnText="Edit Your Prediction"
                btnIconName="fi-add"
                btnConfig={{ BtnIcon: false }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="si-pp-wrp si-pp--predictions si-fade in">
        <div className="si-pp">
          <div className="si-ppHead">
            <span className="si-ppHeadTxt">Alert</span>
            <span className="si-close kkr-pop-up-close"></span>
          </div>
          <div className="si-ppBody">
            <div class="si-matchesComLft si-wrongAns">
              <span>
                8/8<label></label>
              </span>
        
            </div>
            <p className="si-pp--info">
              <span className="si-pp--infoConditional">*Select 2 players to earn more points</span>
              <span>Complete all predictions to earn more points.</span>
            </p>
            <div className="si-tmLft">
              <span>Deadline to edit your predictions</span>
              <span>
                <b>12</b>h 
              </span>
            </div>
            <div className="si-btn-wrp">
              <CtaButton
                btnClass="si-btn si-btn__secondary"
                btnText="Back to Matches"
                btnIconName="fi-add"
                btnConfig={{ BtnIcon: false }}
              />
              <CtaButton
                btnClass="si-btn si-btn__primary"
                btnText="Edit Your Prediction"
                btnIconName="fi-add"
                btnConfig={{ BtnIcon: false }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
