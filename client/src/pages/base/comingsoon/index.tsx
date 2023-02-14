import React from 'react';
import Movie from '../../../components/base/newmovie';
import backImg from '../../../images/coming/jake-hills-194864.jpg';
import avatarImg from '../../../images/movies/avatarthewayofwater700x1000.350x0.jpg';
import planeImg from '../../../images/movies/krushenie700x1000-1.350x0.jpg';
import quantumImg from '../../../images/movies/quantamania.350x0.jpg';
import styled from './comingsoon.module.scss';

function ComingSoon(): JSX.Element {
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
                <Movie img={quantumImg} />
                <Movie img={avatarImg} />
                <Movie img={planeImg} />
                <Movie img={avatarImg} />
                <Movie img={planeImg} />
                <Movie img={quantumImg} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComingSoon;
