import React from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';


const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider'>
        <div className='container'>
            <Swiper
        slidesPerView={7}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link to="/">
                <div className='item flex items-center justify-center flex-col'>
                    <div className='item p-3 bg-white text-center flex items-center justify-center flex-col h-[130px] w-[130px]'>
                        <img src="https://serviceapi.spicezgold.com/download/1754414198666_fashion_cat.png" className='w-[60px] ' alt="" />
                        <h3 className='mt-3'>Fashion</h3>
                    </div>
                   
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <div className='item  flex items-center justify-center flex-col'>
                    <div className='item p-3 bg-white text-center flex items-center justify-center flex-col h-[130px] w-[130px]'>
                        <img src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png" className='w-[60px] ' alt="" />
                        <h3 className='mt-3'>Electronics</h3>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <div className='item flex items-center justify-center flex-col'>
                    <div className='item p-3 bg-white text-center flex items-center justify-center flex-col h-[130px] w-[130px]'>
                        <img src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png" className='w-[60px] ' alt="" />
                        <h3 className='mt-3'>Bags</h3>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <div className='item flex items-center justify-center flex-col'>
                    <div className='item p-3 bg-white text-center flex items-center justify-center flex-col h-[130px] w-[130px]'>
                        <img src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png" className='w-[60px] ' alt="" />
                        <h3 className='mt-3'>Footwear</h3>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <div className='item flex items-center justify-center flex-col'>
                    <div className='item p-3 bg-white text-center flex items-center justify-center flex-col h-[130px] w-[130px]'>
                        <img src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png" className='w-[60px] ' alt="" />
                        <h3 className='mt-3'>Groceries</h3>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <div className='item flex items-center justify-center flex-col'>
                    <div className='item p-3 bg-white text-center flex items-center justify-center flex-col h-[130px] w-[130px]'>
                        <img src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png" className='w-[60px] ' alt="" />
                        <h3 className='mt-3'>Beauty</h3>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <div className='item flex items-center justify-center flex-col'>
                    <div className='item p-3 bg-white text-center flex items-center justify-center flex-col h-[130px] w-[130px]'>
                        <img src="https://serviceapi.spicezgold.com/download/1741661105893_well.png" className='w-[60px] ' alt="" />
                        <h3 className='mt-3'>Wellness</h3>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <div className='item flex items-center justify-center flex-col'>
                    <div className='item p-3 bg-white text-center flex items-center justify-center flex-col h-[130px] w-[130px]'>
                        <img src="https://serviceapi.spicezgold.com/download/1749273446706_jw.png" className='w-[60px] ' alt="" />
                        <h3 className='mt-3'>Jewellery</h3>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default HomeCatSlider