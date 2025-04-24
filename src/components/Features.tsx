import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import img1 from '../assets/images/carouselimage/img1.png';
import img2 from '../assets/images/carouselimage/img2.png';
import img3 from '../assets/images/carouselimage/img3.png';
import img4 from '../assets/images/carouselimage/img4.png';
import img5 from '../assets/images/carouselimage/img5.png';
import img6 from '../assets/images/carouselimage/img6.png';

export default function App() {
  return (
    <>
    <section style={{ marginLeft: '50px', marginRight: '50px' }}>
      <Swiper
      modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={50}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,

        }
        }
        speed={600}
        loop  = {true}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="Slide 1" /></SwiperSlide>
      </Swiper>
      </section>
    </>
  );
}

