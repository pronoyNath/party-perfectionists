import { Swiper, SwiperSlide } from 'swiper/react';

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
          <img className='h-full object-contain' src="https://i.ibb.co/VYFQyVT/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full object-contain' src="https://i.ibb.co/f11gD9V/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full object-contain' src="https://i.ibb.co/gtNgZwg/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full object-contain' src="https://i.ibb.co/f0dhfWW/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src="https://i.ibb.co/d2kFy96/6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src="https://i.ibb.co/6sGyB1s/5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src="https://i.ibb.co/zHVkgrr/7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src="https://i.ibb.co/f9c7zfH/8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full object-contain' src="https://i.ibb.co/G0TCKT5/9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
