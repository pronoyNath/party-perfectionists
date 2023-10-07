// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import img9 from '../../assets/9.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Gallery() {
  return (
    <>
    <div className=' pt-5'>
           <h3 data-aos="fade-right" className='font-semibold text-2xl text-center underline text-pink-500'>Some of Our Best Pictures</h3>
           </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={4}
      >
        <SwiperSlide>
          <img className='h-full object-contain' src={img1} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full object-contain' src={img2} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full object-contain' src={img3} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full object-contain' src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src={img8} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src={img9} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

