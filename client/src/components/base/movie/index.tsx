import React from 'react';
import { Link } from 'react-router-dom';
import type IMovie from '../../../interfaces/movie';
import { ReactComponent as D2 } from '../../../svgs/2d-label-icon.svg';
import { ReactComponent as D3 } from '../../../svgs/3d-label-icon.svg';
import { ReactComponent as AzerbaijanFlag } from '../../../svgs/azerbaijan-flag-icon.svg';
import { ReactComponent as InfoSvg } from '../../../svgs/circle-info-solid.svg';
import { ReactComponent as PlaySvg } from '../../../svgs/circle-play-solid.svg';
import { ReactComponent as RusFlag } from '../../../svgs/russia-flag-icon.svg';
import { ReactComponent as TurkeyFlag } from '../../../svgs/turkey-flag-icon.svg';
import { ReactComponent as EnglishFlag } from '../../../svgs/united-kingdom-flag-icon.svg';
import styled from './movie.module.scss';

function Movie(props: { data: IMovie }): JSX.Element {
  const duration = props.data?.duration.split(':');
  return (
    <div className={styled.movie}>
      <article className={styled.movie__body}>
        <div className={styled.movie__body__img}>
          <img src={require(`../../../images/movies/${String(props.data.image)}`)} alt="movie" />
          <div className={styled.movie__body__img__info}>
            <span>G</span>
          </div>
        </div>
        <div className={styled.movie__body__content}>
          <h4>{props.data.name}</h4>
          <div className={styled.movie__body__content__date}>
            <strong>Release:</strong>
            &nbsp;
            {new Date(props.data.sessionTime).toDateString()}
          </div>
          <div className={styled.movie__body__content__icons}>
            {props.data.formats.d2 && (
              <div className={styled.movie__body__content__icons__2d}>
                <D2 />
              </div>
            )}
            {props.data.formats.d3 && (
              <div className={styled.movie__body__content__icons__3d}>
                <D3 />
              </div>
            )}
            {props.data.languages.tu && (
              <div className={styled.movie__body__content__icons__tr}>
                <TurkeyFlag />
              </div>
            )}
            {props.data.languages.az && (
              <div className={styled.movie__body__content__icons__az}>
                <AzerbaijanFlag />
              </div>
            )}
            {props.data.languages.en && (
              <div className={styled.movie__body__content__icons__en}>
                <EnglishFlag />
              </div>
            )}
            {props.data.languages.ru && (
              <div className={styled.movie__body__content__icons__ru}>
                <RusFlag />
              </div>
            )}
          </div>
          <div className={styled.movie__body__content__btn}>
            <Link to={'#'}>
              <PlaySvg />
              Sessions
            </Link>
            <Link to={'#'}>
              <InfoSvg />
              Detail
            </Link>
          </div>
        </div>
        <div className={styled.movie__body__hover}>
          <h4>
            <Link to={'#'}>{props.data.name}</Link>
          </h4>
          <span className={styled.movie__body__hover__pg}>G</span>
          <div className={styled.movie__body__hover__text}>
            <p>
              <strong>Relase: </strong>
              {new Date(props.data.sessionTime).toDateString()}
            </p>
            <p>
              <strong>Genre: </strong>
              <span>{props.data.genre}</span>
            </p>
            <p>
              <strong>Duration: </strong>
              {duration?.[0]} hours {duration?.[1]} minutes
            </p>
          </div>
          <div className={styled.movie__body__hover__lang}>
            {props.data.languages.az && <span>AZ</span>}
            {props.data.languages.tu && <span>TU</span>}
            {props.data.languages.ru && <span>RU</span>}
            {props.data.languages.en && <span>EN</span>}
          </div>
          <div className={styled.movie__body__hover__age}>
            <p>{props.data.ageLimit} +</p>
          </div>
          <div className={styled.movie__body__hover__btn}>
            <Link to={String(`/schedule/${props.data.name}`)}>
              <PlaySvg />
              Sessions
            </Link>
            <Link to={`/detail/${props.data._id}`}>
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
