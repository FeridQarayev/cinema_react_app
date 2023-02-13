import React from 'react';
import { Link } from 'react-router-dom';
import icon5 from '../../../images/constant/en.png';
import icon1 from '../../../images/constant/fourdx.png';
import icon3 from '../../../images/constant/ru.png';
import icon2 from '../../../images/constant/threed.png';
import icon4 from '../../../images/constant/tr.png';
import move1 from '../../../images/movies/quantamania.350x0.jpg';
import styled from './newmovie.module.scss';

function Movie(): JSX.Element {
  return (
    <div className={styled.movie}>
      <div className={styled.movie__presale}>PRESALE</div>
      <h2>
        <p>Ant-Man and the Wasp: Quantumania</p>
      </h2>
      <div className={styled.movie__content}>
        <span className={styled.movie__content__age}>12+</span>
        <div className={styled.movie__content__poster}>
          <img src={move1} alt="movie" />
        </div>
        <div className={styled.movie__content__icons}>
          <span className={styled.movie__content__icons__icon}>
            <span>
              <b></b>
              Film 4DX formatinda nümayiş olunur
            </span>
            <img src={icon1} alt="fourdx" />
          </span>
          <span className={styled.movie__content__icons__icon}>
            <span>
              <b></b>
              Movie format: 3D
            </span>
            <img src={icon2} alt="threed" />
          </span>
          <span className={styled.movie__content__icons__icon}>
            <span>
              <b></b>
              Movie language: Rus
            </span>
            <img src={icon3} alt="russian" />
          </span>
          <span className={styled.movie__content__icons__icon}>
            <span>
              <b></b>
              Movie language: Tur
            </span>
            <img src={icon4} alt="turkish" />
          </span>
          <span className={styled.movie__content__icons__icon}>
            <span>
              <b></b>
              Movie language: Eng
            </span>
            <img src={icon5} alt="english" />
          </span>
        </div>
        <div className={styled.movie__content__down}>
          <Link to={'home'}>SESSIONS</Link>
        </div>
      </div>
    </div>
  );
}

export default Movie;
