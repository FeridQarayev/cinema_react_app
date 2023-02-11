import React, { useRef } from 'react';
import Movie from '../../../components/base/movie';
import Slider from '../../../components/base/slider';
import styled from './home.module.scss';

function Home(): JSX.Element {
  const btns = useRef<HTMLButtonElement[]>([]);
  const changeTab = (element: HTMLButtonElement): void => {
    btns.current.forEach((element) => {
      element.classList.remove(styled.tab_active);
    });
    element.classList.add(styled.tab_active);
  };
  return (
    <div className={styled.home}>
      <Slider />
      <div className={styled.home__tab}>
        <div className={styled.home__tab__header}>
          <button
            onClick={(e) => {
              changeTab(e.currentTarget);
            }}
            ref={(e: HTMLButtonElement) => btns.current.push(e)}
            className={[styled.home__tab__header__btn,styled.tab_active].join(' ')}
          >
            TODAY
          </button>
          <button
            onClick={(e) => {
              changeTab(e.currentTarget);
            }}
            ref={(e: HTMLButtonElement) => btns.current.push(e)}
            className={styled.home__tab__header__btn}
          >
            SCHEDULE
          </button>
          <button
            onClick={(e) => {
              changeTab(e.currentTarget);
            }}
            ref={(e: HTMLButtonElement) => btns.current.push(e)}
            className={styled.home__tab__header__btn}
          >
            SOON
          </button>
        </div>
        <div className={styled.home__tab__body}>
          <div className={styled.home__tab__body__container}>
            <div className={styled.home__tab__body__container__today}>
              <div className={styled.home__tab__body__container__today__up}>
                <div className={styled.home__tab__body__container__today__up__drop}>
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
                <div className={styled.home__tab__body__container__today__up__drop}>
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
              <div className={styled.home__tab__body__container__today__middle}>
                <div className={styled.home__tab__body__container__today__middle__body}>
                  <Movie />
                  <Movie />
                  <Movie />
                  <Movie />
                  <Movie />
                </div>
              </div>
              <div className={styled.home__tab__body__container__today__down}></div>
            </div>
            <div className={styled.home__tab__body__container__schedule}></div>
            <div className={styled.home__tab__body__container__soon}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
