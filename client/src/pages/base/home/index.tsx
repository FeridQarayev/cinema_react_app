import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { Link } from 'react-router-dom';
import slideImg2 from '../../../images/slider/banner-1.jpg';
import slideImg1 from '../../../images/slider/banner-2.jpg';
import slideImg3 from '../../../images/slider/banner-3.png';
import styled from './home.module.scss';

function Home(): JSX.Element {
  const classNamesOptions = { selected: styled.sliderTextAnimate };
  const autoplayOptions = {
    delay: 7000,
  };
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    ClassNames(classNamesOptions),
    Autoplay(autoplayOptions),
  ]);
  return (
    <div className={styled.home}>
      <div className={styled.home__slider} ref={emblaRef}>
        <div className={styled.home__slider__container}>
          <div
            style={{ backgroundImage: `url(${String(slideImg1)})` }}
            className={styled.home__slider__container__slide}
          >
            <div className={styled.home__slider__container__slide__body}>
              <div className={styled.home__slider__container__slide__body__row}>
                <div className={styled.home__slider__container__slide__body__row__col}>
                  <div className={styled.home__slider__container__slide__body__row__col__text}>
                    <span>New</span>
                    <h2>Deadpool: No Good Deed</h2>
                    <div
                      className={styled.home__slider__container__slide__body__row__col__text__cast}
                    >
                      <h6>
                        <strong>Cast:</strong>
                      </h6>
                      <p>Ryan Reynolds (Deadpool)</p>
                      <p>Morena Baccarin (Vanessa)</p>
                    </div>
                    <ul>
                      <li>
                        <span>HD</span>
                      </li>
                      <li>
                        <strong>Rated</strong>
                        &nbsp; 8.5
                      </li>
                      <li>
                        <strong>Genre:</strong>
                        &nbsp; Horror, Comedy, Action, Sci-Fi.
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                    <div
                      className={styled.home__slider__container__slide__body__row__col__text__btn}
                    >
                      <Link to={'home'}>Watch</Link>
                      <Link to={'home'}>+ Add To Watchlist</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${String(slideImg2)})` }}
            className={styled.home__slider__container__slide}
          >
            <div className={styled.home__slider__container__slide__body}>
              <div className={styled.home__slider__container__slide__body__row}>
                <div className={styled.home__slider__container__slide__body__row__col}>
                  <div className={styled.home__slider__container__slide__body__row__col__text}>
                    <span>New</span>
                    <h2>Deadpool: No Good Deed</h2>
                    <div
                      className={styled.home__slider__container__slide__body__row__col__text__cast}
                    >
                      <h6>
                        <strong>Cast:</strong>
                      </h6>
                      <p>Ryan Reynolds (Deadpool)</p>
                      <p>Morena Baccarin (Vanessa)</p>
                    </div>
                    <ul>
                      <li>
                        <span>HD</span>
                      </li>
                      <li>
                        <strong>Rated</strong>
                        &nbsp; 8.5
                      </li>
                      <li>
                        <strong>Genre:</strong>
                        &nbsp; Horror, Comedy, Action, Sci-Fi.
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                    <div
                      className={styled.home__slider__container__slide__body__row__col__text__btn}
                    >
                      <Link to={'home'}>Watch</Link>
                      <Link to={'home'}>+ Add To Watchlist</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${String(slideImg3)})` }}
            className={styled.home__slider__container__slide}
          >
            <div className={styled.home__slider__container__slide__body}>
              <div className={styled.home__slider__container__slide__body__row}>
                <div className={styled.home__slider__container__slide__body__row__col}>
                  <div className={styled.home__slider__container__slide__body__row__col__text}>
                    <span>New</span>
                    <h2>Deadpool: No Good Deed</h2>
                    <div
                      className={styled.home__slider__container__slide__body__row__col__text__cast}
                    >
                      <h6>
                        <strong>Cast:</strong>
                      </h6>
                      <p>Ryan Reynolds (Deadpool)</p>
                      <p>Morena Baccarin (Vanessa)</p>
                    </div>
                    <ul>
                      <li>
                        <span>HD</span>
                      </li>
                      <li>
                        <strong>Rated</strong>
                        &nbsp; 8.5
                      </li>
                      <li>
                        <strong>Genre:</strong>
                        &nbsp; Horror, Comedy, Action, Sci-Fi.
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                    <div
                      className={styled.home__slider__container__slide__body__row__col__text__btn}
                    >
                      <Link to={'home'}>Watch</Link>
                      <Link to={'home'}>+ Add To Watchlist</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
