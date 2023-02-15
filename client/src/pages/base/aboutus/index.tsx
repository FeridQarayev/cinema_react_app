import React, { useRef } from 'react';
import record from '../../../images/aboutus/maxresdefault-11.jpg';
import video from '../../../videos/Free HD Stock Film 8mm Projector broll.mp4';
import styled from './aboutus.module.scss';

function AboutUs(): JSX.Element {
  const videoTag = useRef<HTMLVideoElement>(null);
  window.addEventListener('scroll', (e) => {
    if (videoTag.current !== null && window.pageYOffset < 700) {
      videoTag.current.style.transform = String(`translate3d(0px, ${window.pageYOffset}px, 0px)`);
    }
  });
  return (
    <div className={styled.about}>
      <section className={styled.about__up}>
        <div className={styled.about__up__back}>
          <img src={record} alt="cinema" />
          <div className={styled.about__up__back__video}>
            <video ref={videoTag} preload="auto" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styled.about__up__color}></div>
        <div className={styled.about__up__body}>
          <div className={styled.about__up__body__container}>
            <div className={styled.about__up__body__container__text}>
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: '1000px', width: '100%', backgroundColor: 'red' }}></div>
    </div>
  );
}

export default AboutUs;
