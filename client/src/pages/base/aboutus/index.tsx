import React from 'react';
import record from '../../../images/aboutus/maxresdefault-11.jpg';
import video from '../../../videos/Free HD Stock Film 8mm Projector broll.mp4';
import styled from './aboutus.module.scss';

function AboutUs(): JSX.Element {
  return (
    <div className={styled.about}>
      <section className={styled.about__up}>
        <div className={styled.about__up__back}>
          <img src={record} alt="cinema" />
          <div className={styled.about__up__back__video}>
            <iframe
              src={video}
              frameBorder="0"
              allowFullScreen={true}
              title="Free HD Stock Film 8mm Projector broll"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
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
    </div>
  );
}

export default AboutUs;
