import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';



const HomeSlider = () => {
  return (
    <>
     <div className='homeSlider py-4'>
        <div className='container'>
        <Swiper
        spaceBetween={10} 
        navigation={true} 
        modules={[Navigation]} 
        className="sliderHome">
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg" alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg" alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg" alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg" alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg" alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg" alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg"  alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"  alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg" alt='Banner Image' className='w-full rounded-[10px]'/></SwiperSlide>
        </Swiper> 
        </div>
     </div>
    </>
  )
}

export default HomeSlider
