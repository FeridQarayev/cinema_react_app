import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as InfoSvg } from '../../../svgs/circle-info-solid.svg';
import { ReactComponent as PlaySvg } from '../../../svgs/circle-play-solid.svg';
import styled from './movie.module.scss';

function Movie(props: { img: string }): JSX.Element {
  return (
    <div className={styled.movie}>
      <article className={styled.movie__body}>
        <div className={styled.movie__body__img}>
          <img src={props.img} alt="movie" />
          <div className={styled.movie__body__img__info}>
            <span>G</span>
          </div>
        </div>
        <div className={styled.movie__body__content}>
          <h4>Kubo and the Two Strings</h4>
          <div className={styled.movie__body__content__date}>
            <strong>Release:</strong>
            February 15, 2022
          </div>
          <div className={styled.movie__body__content__btn}>
            <Link to={'#'}>
              <PlaySvg />
              Trailer
            </Link>
            <Link to={'#'}>
              <InfoSvg />
              Detail
            </Link>
          </div>
        </div>
        <div className={styled.movie__body__hover}>
          <h4>
            <Link to={'#'}>Kubo and the Two Strings</Link>
          </h4>
          <span className={styled.movie__body__hover__pg}>G</span>
          <div className={styled.movie__body__hover__text}>
            <p>
              <strong>Relase: </strong>
              February 15, 2022
            </p>
            <p>
              <strong>Genre: </strong>
              <span>Cartoon</span>
              <span>Comic</span>
            </p>
            <p>
              <strong>Duration: </strong>
              02 hours 00 minutes
            </p>
            <p>
              <strong>Language: </strong>
              English
            </p>
          </div>
          <div className={styled.movie__body__hover__btn}>
            <Link to={'#'}>
              <PlaySvg />
              Trailer
            </Link>
            <Link to={'#'}>
              <InfoSvg />
              Detail
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Movie;
