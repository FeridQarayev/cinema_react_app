import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import slideImg2 from '../../../images/slider/banner-1.jpg';
import slideImg1 from '../../../images/slider/banner-2.jpg';
import slideImg3 from '../../../images/slider/banner-3.png';
import styled from './home.module.scss';

function Home(): JSX.Element {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className={styled.embla} ref={emblaRef}>
      <div className={styled.embla__container}>
        <div
          style={{ backgroundImage: `url(${String(slideImg1)})` }}
          className={styled.embla__slide}
        ></div>
        <div
          style={{ backgroundImage: `url(${String(slideImg2)})` }}
          className={styled.embla__slide}
        ></div>
        <div
          style={{ backgroundImage: `url(${String(slideImg3)})` }}
          className={styled.embla__slide}
        ></div>
      </div>
    </div>
  );
}

export default Home;
