import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type IMovie from '../../../interfaces/movie';
import { movieGetById } from '../../../services/movie';
import { ReactComponent as Clock } from '../../../svgs/clock-regular.svg';
import styled from './detail.module.scss';

function Detail(): JSX.Element {
  const [movie, setMovie] = useState<IMovie>();
  const { id } = useParams();

  useEffect(() => {
    id !== undefined &&
      movieGetById(id).then((res) => {
        setMovie(res.data.data);
      });
  }, []);
  const duration = movie?.duration.split(':');
  return (
    <div className={styled.detail}>
      <section className={styled.detail__up}>
        <img src={movie !== undefined ? require(`../../../images/movies/${String(movie?.coverImage)}`) : ''} alt={movie?.name} />
      </section>

      <section className={styled.detail__body}>
        <div className={styled.detail__body__container}>
          <div className={styled.detail__body__container__row}>
            <article className={styled.detail__body__container__row__content}>
              <div className={styled.detail__body__container__row__content__movie}>
                <div className={styled.detail__body__container__row__content__movie__left}>
                  <div className={styled.detail__body__container__row__content__movie__left__img}>
                    <img src={movie !== undefined ? require(`../../../images/movies/${String(movie?.image)}`) : ''} alt={movie?.name} />
                  </div>
                </div>
                <div className={styled.detail__body__container__row__content__movie__right}>
                  <div className={styled.detail__body__container__row__content__movie__right__info}>
                    <h1>{movie?.name}</h1>
                    <div className={styled.detail__body__container__row__content__movie__right__info__pg}>
                      <span>G</span>
                      <span>
                        <Clock /> {duration?.[0]} hours {duration?.[1]} minutes
                      </span>
                    </div>
                    <ul className={styled.detail__body__container__row__content__movie__right__info__list}>
                      <li>
                        <label>Actor: </label>
                        <span>{movie?.actor}</span>
                      </li>
                      <li>
                        <label>Director: </label>
                        <span>{movie?.director}</span>
                      </li>
                      <li>
                        <label>Genre: </label>
                        <span>{movie?.genre}</span>
                      </li>
                      <li>
                        <label>Release: </label>
                        <span>{movie !== undefined && new Date(movie.sessionTime).toDateString()}</span>
                      </li>
                      <li>
                        <label>Language: </label>
                        <span>
                          {(movie?.languages.az ?? false) && 'AZ '}
                          {(movie?.languages.tu ?? false) && 'TU '}
                          {(movie?.languages.ru ?? false) && 'RU '}
                          {(movie?.languages.en ?? false) && 'EN '}
                        </span>
                      </li>
                      <li>
                        <label>IMDB Rating: </label>
                        &nbsp;
                        <span>{movie?.rating}</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styled.detail__body__container__row__content__movie__right__action}></div>
                  <div className={styled.detail__body__container__row__content__movie__right__desc}>
                    <h3>Synopsis</h3>
                    <p>{movie?.synopsis}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
