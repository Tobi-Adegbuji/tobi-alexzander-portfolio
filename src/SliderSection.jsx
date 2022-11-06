import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Mousewheel, EffectCards } from "swiper";
import SliderCard from "./SliderCard";
import sportology from "./img/sportology.png";
import fedEx from "./img/fed-ex.png";
import ReactModal from "react-modal";
import {projects, experiences} from "./data";

import "./SliderSection.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

function SliderSection() {
  const [experienceModalIsOpen, setExperienceModalIsOpen] = useState(false);
  const [projectModalIsOpen, setProjectModalIsOpen] = useState(false);
  const [project, setProject] = useState({});
  const [experience, setExperience] = useState({});

  //Does not allow for user to scroll if modal is open
  useEffect(() => {
    projectModalIsOpen && (document.body.style.overflow = 'hidden');
    !projectModalIsOpen && (document.body.style.overflow = '');
 }, [projectModalIsOpen])


  const handleProjectCardClick = (project) => {
    setProjectModalIsOpen(true);
    setProject(project);
  };

  const handleExperienceCardClick = (experience) => {
    setExperienceModalIsOpen(true);
    setExperience(experience);
  }


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
        slidesPerView={1}
        mousewheel={{
          mousewheel: true,
        }}
        breakpoints={{
          2452: {
            slidesPerView: 3,
          },
          1972: {
            slidesPerView: 3,
          },
          1044: {
            slidesPerView: 2,
          },
          612: {
            slidesPerView: 3
          }
        }}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide className="swiperSlide" key={index} onClick={() => handleProjectCardClick(project)}>
              <SliderCard projectImage={project.image} />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <SliderCard projectImage={'sportology.png'} />
        </SwiperSlide> */}
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
        slidesPerView={1}
        mousewheel={{
          mousewheel: true,
        }}
        breakpoints={{
          2452: {
            slidesPerView: 3,
          },
          1972: {
            slidesPerView: 3,
          },
          1044: {
            slidesPerView: 2,
          },
          612: {
            slidesPerView: 3
          }
        }}
      >
        {experiences.map((experience, index) => {
          return (
            <SwiperSlide className="swiperSlide" key={index} onClick={() => handleExperienceCardClick(experience)}>
              <SliderCard experienceImage={experience.image} />
            </SwiperSlide>
          );
        })}
        
      </Swiper>

      

      <ReactModal
        className="project-modal"
        isOpen={projectModalIsOpen}
        onRequestClose={() => setProjectModalIsOpen(false)}
        preventScroll={true}
        style={{
          overlay: {
            zIndex: 1000,
            backgroundColor: "black",
            background: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <img  src={ projectModalIsOpen ? require(`./img/${project.image}`) : ""} />
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


      <ReactModal
        className="project-modal"
        isOpen={experienceModalIsOpen}
        onRequestClose={() => setExperienceModalIsOpen(false)}
        preventScroll={true}
        style={{
          overlay: {
            zIndex: 1000,
            backgroundColor: "black",
            background: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <img  
        src={ experienceModalIsOpen ? require(`./img/${experience.imageAbout}`) : ""} 
        />
        <h1>{experience.company}</h1>
        <h4>Technologies</h4>
        <div className='project-modal-technolgy-container'>
        {experience.technologies?.map((technology, index) => {
          return (
            <div className="project-modal-technology" key={index}>
              <p>{technology}</p>
            </div>
          );
        })}
        </div>
        <h4 className="project-modal-about-title">About</h4>
        <p>{experience.about}</p>       
      </ReactModal>

    </section>
  );
}

export default SliderSection;
