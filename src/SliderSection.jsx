import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Mousewheel} from "swiper";

import './SliderSection.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel"

function SliderSection() {
  return (
      <section className='slider-section'>
      <Swiper
          className="swiper"
          modules={[Navigation, Pagination, A11y, Mousewheel]}
          loop={true}
          navigation={{
            navigation: true,
          }}
          spaceBetween={40}
          slidesPerView={3}
          mousewheel={{
              mousewheel: true
          }}
        >
          <SwiperSlide className="project">Slide 2</SwiperSlide>
          <SwiperSlide className="project">Slide 1</SwiperSlide>
          <SwiperSlide className="project">Slide 3</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          ...
        </Swiper>
        <Swiper
          className="swiper"
          modules={[Navigation, Pagination, A11y]}
          loop={true}
          navigation={{
            navigation: true,
          }}
          spaceBetween={40}
          slidesPerView={4}
        >
          <SwiperSlide className="project">Slide 2</SwiperSlide>
          <SwiperSlide className="project">Slide 1</SwiperSlide>
          <SwiperSlide className="project">Slide 3</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          ...
        </Swiper>
      </section>
      );
}

export default SliderSection;
