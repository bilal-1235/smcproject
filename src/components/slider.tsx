import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
    return (

<section>
      <Swiper
      modules={[Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={200}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,

        }
        }
        speed={600}
        loop  = {true}
        className="mySwiper"
      >
        <SwiperSlide> <img src={"/img1.png"} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={"/img2.png"} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={"/img3.png"} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={"/img4.png"} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={"/img5.png"} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={"/img6.png"} alt="Slide 1" /></SwiperSlide>
      </Swiper>
      <div className='d-flex justify-content-center'><button className="btn btn-primary mt-4  "  > Join our Member
      </button></div>
      </section>
       );
    }