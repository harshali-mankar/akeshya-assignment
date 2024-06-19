import { useState } from "react";
import CircularSlider from "react-circular-slider-svg";

export default () => {
  const [value1, setValue1] = useState(0);

  return (
    <>
      <div className="rs-container full">
        <div className="rs-innerValue">
          <span>between 0 to 25+</span>
        </div>
        <div class="si-scoreTxtWrp">
          <div class="si-scoreTxt">
          <span className='si-yrpActive'>181        
                   <div className='si-yrPrediction'>
                      <span>Your Prediction</span>
                      <b></b>
                   </div>
               </span>
            <span>{Math.round(value1)}</span>
            {/* <span class="si-correctAns">20</span> */}
          </div>
          <label className="si-vhidden">Score</label>
        </div> 
        <div className="rs-inner-container">
          <CircularSlider
          size={170}
          
          // minValue={0}
          // maxValue={100}
          startAngle={0}
          endAngle={360}
          angleType={{
            direction: "cw",
            axis: "+y",
          }}
          handle1={{
            value: value1,
            onChange: (v) => setValue1(v),
          }}
          arcColor="#C39711"
          arcBackgroundColor="hsla(40, 100%, 59%, 0.2)"
        />
      </div>
      </div>

    </>
  );
};
