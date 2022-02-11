import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Mousewheel, EffectCards } from "swiper";
import SliderCard from "./SliderCard";
import sportology from "./img/sportology.png";
import fedEx from "./img/fed-ex.png";
import ReactModal from "react-modal";
import projects from "./projects";

import "./SliderSection.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

function SliderSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [project, setProject] = useState({});

  //Does not allow for user to scroll if modal is open
  useEffect(() => {
    modalIsOpen && (document.body.style.overflow = 'hidden');
    !modalIsOpen && (document.body.style.overflow = '');
 }, [modalIsOpen])


  const handleCardClick = (project) => {
    setModalIsOpen(true);
    setProject(project);
  };


  return (
    <section className="slider-section">
      <h4>PROJECTS</h4>
      <Swiper
        className="swiper"
        effect="cards"
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        loop={true}
        navigation={{
          navigation: true,
        }}
        spaceBetween={40}
        slidesPerView={4}
        mousewheel={{
          mousewheel: true,
        }}
        breakpoints={{
          2452: {
            slidesPerView: 5,
          },
          1972: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
          1324: {
            slidesPerView: 4,
          },
        }}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide className="swiperSlide" key={index} onClick={() => handleCardClick(project)}>
              <SliderCard cardImage={project.image} />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <SliderCard cardImage={sportology} />
        </SwiperSlide>
      </Swiper>


      <h4>EXPERIENCE</h4>
      <Swiper
        className="swiper"
        effect="cards"
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        loop={true}
        navigation={{
          navigation: true,
        }}
        spaceBetween={40}
        slidesPerView={4}
        mousewheel={{
          mousewheel: true,
        }}
        breakpoints={{
          2452: {
            slidesPerView: 5,
          },
          1972: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
          1324: {
            slidesPerView: 4,
          },
        }}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide className="swiperSlide" key={index} onClick={() => handleCardClick(project)}>
              <SliderCard cardImage={project.image} />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <SliderCard cardImage={sportology} />
        </SwiperSlide>
      </Swiper>

      

      <ReactModal
        className="project-modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        preventScroll={true}
        style={{
          overlay: {
            zIndex: 1000,
            backgroundColor: "black",
            background: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <img src={project.image} />
        <h1>{project.name}</h1>
        <h4>Technologies</h4>
        <div className='project-modal-technolgy-container'>
        {project.technologies?.map((technology, index) => {
          return (
            <div className="project-modal-technology" key={index}>
              <p>{technology}</p>
            </div>
          );
        })}
        </div>
        <h4 className="project-modal-about-title">About</h4>
        <p>{project.about}</p>
        <h4>Challenges</h4>
        <p>{project.challenge}</p>
        <h6>
          View Code Here: <a className="gitLink" href={project.githubLink}>{project.name}</a>
        </h6>
        
      </ReactModal>
    </section>
  );
}

export default SliderSection;
