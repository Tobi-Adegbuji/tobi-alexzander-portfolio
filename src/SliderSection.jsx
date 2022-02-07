import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Mousewheel, EffectCards} from "swiper";
import SliderCard from './SliderCard';
import movieStreamz from './img/movie-streamz.png';
import springRecipes from './img/spring-recipes.png';
import edgeExpress from './img/edge-express.png';
import webDiaries from './img/web-diaries.png';


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
          effect='cards'
          modules={[Navigation, Pagination, A11y, Mousewheel]}
          loop={true}
          navigation={{
            navigation: true,
          }}
          spaceBetween={40}
          slidesPerView={5}
          mousewheel={{
              mousewheel: true
          }}
          breakpoints={{
            2452:{
              slidesPerView: 5
            }
            ,
            1972:{
              slidesPerView: 4
            },
            1448:{
              slidesPerView: 3
            },
            1024:{
              slidesPerView: 2
            },
          }}
        >
          <SwiperSlide>
            <SliderCard cardImage={movieStreamz}/>
          </SwiperSlide>
          <SwiperSlide >
          <SliderCard cardImage={springRecipes}/>
          </SwiperSlide>
          <SwiperSlide > 
          <SliderCard cardImage={edgeExpress}/>
          </SwiperSlide>
          <SwiperSlide >
          <SliderCard cardImage={webDiaries}/>
          </SwiperSlide>
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
          <SwiperSlide className="project">Slide 1</SwiperSlide>
          <SwiperSlide className="project">Slide 2</SwiperSlide>
          <SwiperSlide className="project">Slide 3</SwiperSlide>
          <SwiperSlide className="project">Slide 4</SwiperSlide>
          <SwiperSlide className="project">Slide 5</SwiperSlide>
          <SwiperSlide className="project">Slide 6</SwiperSlide>
          <SwiperSlide className="project">Slide 7</SwiperSlide>
          <SwiperSlide className="project">Slide 8</SwiperSlide>
          ...
        </Swiper>
      </section>
      );
}

export default SliderSection;
