import React from "react";
import CtaButton from "../../../ReusableComponents/Buttons";

const ViewPoint = () => {
  return (
    <>
      <div className="si-matchesPoints">
        <div className="si-matchesComLft">
          <span>5/7</span>
          <span>Correct Answers</span>
        </div>
        <div className="si-matchesComLft si-wrongAns">
          {/* si-wrongAns | si-correctAns */}
          <span>
            8/8
            <label />
          </span>
          <span>Points Earned</span>
        </div>

        <CtaButton
          btnClass="si-btn si-btn__secondary"
          btnText="View Points"
          btnIconName="kkr-arrow-type-2"
          btnConfig={{ BtnIcon: false }}
        />
      </div>
    </>
  );
};

export default ViewPoint;
