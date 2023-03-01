import React from 'react';
import { Link } from 'react-router-dom';
import icon6 from '../../../images/constant/az.png';
import icon5 from '../../../images/constant/en.png';
import icon1 from '../../../images/constant/fourdx.png';
import icon3 from '../../../images/constant/ru.png';
import icon2 from '../../../images/constant/threed.png';
import icon4 from '../../../images/constant/tr.png';
import type IMovie from '../../../interfaces/movie';
import styled from './newmovie.module.scss';

function Movie(props: { data: IMovie }): JSX.Element {
  return (
    <div className={styled.movie}>
      <div className={styled.movie__presale}>PRESALE</div>
      <h2>
        <p>{props.data.name}</p>
      </h2>
      <div className={styled.movie__content}>
        <span className={styled.movie__content__age}>{props.data.ageLimit}+</span>
        <div className={styled.movie__content__poster}>
          <Link to={`/detail/${props.data._id}`}>
            <img src={require(`../../../images/movies/${props.data.image}`)} alt="movie" />
          </Link>
        </div>
        <div className={styled.movie__content__icons}>
          {props.data.formats.d4 && (
            <span className={styled.movie__content__icons__icon}>
              <span>
                <b></b>
                Film 4DX formatinda nümayiş olunur
              </span>
              <img src={icon1} alt="fourdx" />
            </span>
          )}
          {props.data.formats.d3 && (
            <span className={styled.movie__content__icons__icon}>
              <span>
                <b></b>
                Movie format: 3D
              </span>
              <img src={icon2} alt="threed" />
            </span>
          )}
          {props.data.languages.az && (
            <span className={styled.movie__content__icons__icon}>
              <span>
                <b></b>
                Movie language: Aze
              </span>
              <img src={icon6} alt="azerbaijan" />
            </span>
          )}
          {props.data.languages.tu && (
            <span className={styled.movie__content__icons__icon}>
              <span>
                <b></b>
                Movie language: Tur
              </span>
              <img src={icon4} alt="turkish" />
            </span>
          )}
          {props.data.languages.ru && (
            <span className={styled.movie__content__icons__icon}>
              <span>
                <b></b>
                Movie language: Rus
              </span>
              <img src={icon3} alt="russian" />
            </span>
          )}
          {props.data.languages.en && (
            <span className={styled.movie__content__icons__icon}>
              <span>
                <b></b>
                Movie language: Eng
              </span>
              <img src={icon5} alt="english" />
            </span>
          )}
        </div>
        <div className={styled.movie__content__down}>
          <Link to={String(`/schedule/${props.data.name}`)}>SESSIONS</Link>
        </div>
      </div>
    </div>
  );
}

export default Movie;
