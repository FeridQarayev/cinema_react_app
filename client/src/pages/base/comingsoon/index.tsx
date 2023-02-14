import React, { useRef } from 'react';
import Movie from '../../../components/base/newmovie';
import backImg from '../../../images/coming/jake-hills-194864.jpg';
import styled from './comingsoon.module.scss';

function ComingSoon(): JSX.Element {
  const btns = useRef<HTMLButtonElement[]>([]);

  const changeTab = (element: HTMLButtonElement): void => {
    btns.current.forEach((element) => {
      element.classList.remove(styled.tab_active);
    });
    element.classList.add(styled.tab_active);
  };
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

      <div className={styled.soon__header}>
        <button
          onClick={(e) => {
            changeTab(e.currentTarget);
          }}
          ref={(e: HTMLButtonElement) => btns.current.push(e)}
          className={[styled.soon__header__btn, styled.tab_active].join(' ')}
        >
          TODAY
        </button>
        <button
          onClick={(e) => {
            changeTab(e.currentTarget);
          }}
          ref={(e: HTMLButtonElement) => btns.current.push(e)}
          className={styled.soon__header__btn}
        >
          SCHEDULE
        </button>
        <button
          onClick={(e) => {
            changeTab(e.currentTarget);
          }}
          ref={(e: HTMLButtonElement) => btns.current.push(e)}
          className={styled.soon__header__btn}
        >
          SOON
        </button>
      </div>
      <div className={styled.soon__body}>
        <div className={styled.soon__body__container}>
          <div className={styled.soon__body__container__today}>
            <div className={styled.soon__body__container__today__up}>
              <div className={styled.soon__body__container__today__up__drop}>
                <select name="cinemas">
                  <option value="0">Cinema</option>
                  <option value="1">28 Mall</option>
                  <option value="2">Ganjlik Mall</option>
                  <option value="3">Deniz Mall</option>
                  <option value="4">Amburan Mall</option>
                  <option value="5">Ganja Mall (Ganja)</option>
                  <option value="6">Nakhchivan</option>
                  <option value="7">Shamakhy</option>
                </select>
              </div>
              <div className={styled.soon__body__container__today__up__drop}>
                <select name="languages">
                  <option value="0">Language</option>
                  <option value="0">All languages</option>
                  <option value="1">Azerbaijan</option>
                  <option value="2">Turkish</option>
                  <option value="3">English</option>
                  <option value="4">Rus</option>
                </select>
              </div>
            </div>
            <div className={styled.soon__body__container__today__middle}>
              <div className={styled.soon__body__container__today__middle__body}>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
              </div>
            </div>
          </div>
          <div className={styled.soon__body__container__schedule}></div>
          <div className={styled.soon__body__container__soon}></div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
