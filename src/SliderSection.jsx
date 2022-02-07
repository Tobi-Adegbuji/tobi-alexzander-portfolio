import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Mousewheel, EffectCards} from "swiper";
import SliderCard from './SliderCard';
import movieStreamz from './img/movie-streamz.png';
import springRecipes from './img/spring-recipes.png';
import edgeExpress from './img/edge-express.png';
import webDiaries from './img/web-diaries.png';
import sportology from './img/sportology.png';
import fedEx from './img/fed-ex.png'; 


import './SliderSection.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel"

function SliderSection() {
  return (
      <section className='slider-section'>
      <h4>PROJECTS</h4>
      <Swiper
          className="swiper"
          effect='cards'
          modules={[Navigation, Pagination, A11y, Mousewheel]}
          loop={true}
          navigation={{
            navigation: true,
          }}
          spaceBetween={40}
          slidesPerView={1}
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
            1501:{
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
          <SwiperSlide >
          <SliderCard cardImage={sportology}/>
          </SwiperSlide>
        </Swiper>
        <h4>EXPERIENCE</h4>
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
            <SliderCard cardImage={fedEx}/>
          </SwiperSlide>
          <SwiperSlide >
          <SliderCard />
          </SwiperSlide>
          <SwiperSlide > 
          <SliderCard />
          </SwiperSlide>
          <SwiperSlide >
          <SliderCard />
          </SwiperSlide>
        </Swiper>
        
      </section>

      
      );
}

export default SliderSection;
