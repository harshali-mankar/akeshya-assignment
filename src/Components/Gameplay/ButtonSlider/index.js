import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';

const ButtonSLider = () => {
  return (
    <Swiper className='si-buttonSlider'
      spaceBetween={15}
      slidesPerView={3.5}
      centeredSlides= {true}
      // loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide >
        <span>100</span>
      </SwiperSlide>
       
      <SwiperSlide>
        <span>100-120</span>
      </SwiperSlide>

      <SwiperSlide>
        <span>121-140</span>
      </SwiperSlide>
   
      <SwiperSlide>
        <span>141-160</span>
      </SwiperSlide>
      <SwiperSlide>
        <span>161-180</span>
      </SwiperSlide>
      <SwiperSlide>
        <span>181-200</span>
      </SwiperSlide>
      <SwiperSlide>
        <span>200-221</span>
      </SwiperSlide>
      <SwiperSlide>
        <span>221-241</span>
      </SwiperSlide>
    </Swiper>
  );
}

export default ButtonSLider