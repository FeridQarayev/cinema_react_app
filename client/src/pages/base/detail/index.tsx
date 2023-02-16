import React from 'react';
import avatar from '../../../images/movies/avatarthewayofwater700x1000.350x0.jpg';
import avatarBack from '../../../images/slider/banner-1.jpg';
import { ReactComponent as Clock } from '../../../svgs/clock-regular.svg';
import styled from './detail.module.scss';

function Detail(): JSX.Element {
  return (
    <div className={styled.detail}>
      <section className={styled.detail__up}>
        <img src={avatarBack} alt="avatar" />
      </section>

      <section className={styled.detail__body}>
        <div className={styled.detail__body__container}>
          <div className={styled.detail__body__container__row}>
            <article className={styled.detail__body__container__row__content}>
              <div className={styled.detail__body__container__row__content__movie}>
                <div className={styled.detail__body__container__row__content__movie__left}>
                  <div className={styled.detail__body__container__row__content__movie__left__img}>
                    <img src={avatar} alt="Avatar" />
                  </div>
                </div>
                <div className={styled.detail__body__container__row__content__movie__right}>
                  <div className={styled.detail__body__container__row__content__movie__right__info}>
                    <h1>Avatar: The Way of Water</h1>
                    <div className={styled.detail__body__container__row__content__movie__right__info__pg}>
                      <span>G</span>
                      <span>
                        <Clock />
                        02 hours 00 minutes
                      </span>
                    </div>
                    <ul className={styled.detail__body__container__row__content__movie__right__info__list}>
                      <li>
                        <label>Actor: </label>
                        <span>Sam Worthington (Jake Sully), Zoe Saldaña (Neytiri Sully)</span>
                      </li>
                      <li>
                        <label>Director: </label>
                        <span>Grace Belly, Mae West</span>
                      </li>
                      <li>
                        <label>Genre: </label>
                        <span>Action, Comic</span>
                      </li>
                      <li>
                        <label>Release: </label>
                        <span>February 15, 2022</span>
                      </li>
                      <li>
                        <label>Language: </label>
                        <span>English</span>
                      </li>
                      <li>
                        <label>IMDB Rating: </label>
                        <span>8.5</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styled.detail__body__container__row__content__movie__right__action}></div>
                  <div className={styled.detail__body__container__row__content__movie__right__desc}>
                    <h3>Synopsis</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                      voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
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
