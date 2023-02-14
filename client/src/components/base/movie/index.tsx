import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as D2 } from '../../../svgs/2d-label-icon.svg';
import { ReactComponent as D3 } from '../../../svgs/3d-label-icon.svg';
import { ReactComponent as AzerbaijanFlag } from '../../../svgs/azerbaijan-flag-icon.svg';
import { ReactComponent as InfoSvg } from '../../../svgs/circle-info-solid.svg';
import { ReactComponent as PlaySvg } from '../../../svgs/circle-play-solid.svg';
import { ReactComponent as RusFlag } from '../../../svgs/russia-flag-icon.svg';
import { ReactComponent as TurkeyFlag } from '../../../svgs/turkey-flag-icon.svg';
import { ReactComponent as EnglishFlag } from '../../../svgs/united-kingdom-flag-icon.svg';
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
          <div className={styled.movie__body__content__icons}>
            <div className={styled.movie__body__content__icons__2d}>
              <D2 />
            </div>
            <div className={styled.movie__body__content__icons__3d}>
              <D3 />
            </div>
            <div className={styled.movie__body__content__icons__tr}>
              <TurkeyFlag />
            </div>
            <div className={styled.movie__body__content__icons__az}>
              <AzerbaijanFlag />
            </div>
            <div className={styled.movie__body__content__icons__en}>
              <EnglishFlag />
            </div>
            <div className={styled.movie__body__content__icons__ru}>
              <RusFlag />
            </div>
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
              <span>Cartoon, </span>
              <span>Comic</span>
            </p>
            <p>
              <strong>Duration: </strong>
              02 hours 00 minutes
            </p>
            {/* <p>
              <strong>Language: </strong>
              English
            </p> */}
          </div>
          <div className={styled.movie__body__hover__lang}>
            <span>AZ</span>
            <span>EN</span>
          </div>
          <div className={styled.movie__body__hover__age}>
            <p>12 +</p>
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
