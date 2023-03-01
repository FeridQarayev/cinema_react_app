import React, { useState, useEffect } from 'react';
import Movie from '../../../components/base/newmovie';
import backImg from '../../../images/coming/jake-hills-194864.jpg';
import type IMovie from '../../../interfaces/movie';
import { movieGetAll } from '../../../services/movie';
import styled from './comingsoon.module.scss';

function ComingSoon(): JSX.Element {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    void movieGetAll().then((res) => {
      setMovies(res.data);
    });
  }, []);
  return (
    <div className={styled.soon}>
      <section className={styled.soon__up}>
        <div className={styled.soon__up__back}>
          <img src={backImg} alt="studio" />
        </div>
        <div className={styled.soon__up__color}></div>
        <div className={styled.soon__up__body}>
          <div className={styled.soon__up__body__content}>
            <div className={styled.soon__up__body__content__container}>
              <div className={styled.soon__up__body__content__container__col}>
                <div className={styled.soon__up__body__content__container__col__ef}>
                  <div className={styled.soon__up__body__content__container__col__ef__inner}>
                    <div className={styled.soon__up__body__content__container__col__ef__inner__wrap}>
                      <div>
                        <h2>Coming Soon</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styled.soon__body}>
        <div className={styled.soon__body__container}>
          <div className={styled.soon__body__container__today}>
            <div className={styled.soon__body__container__today__middle}>
              <div className={styled.soon__body__container__today__middle__body}>
                {movies.map((movie) => (
                  <Movie key={movie._id} data={movie} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComingSoon;
