import React from 'react';
import Slider from '../../../components/base/slider';
import icon5 from '../../../images/constant/en.png';
import icon1 from '../../../images/constant/fourdx.png';
import icon3 from '../../../images/constant/ru.png';
import icon2 from '../../../images/constant/threed.png';
import icon4 from '../../../images/constant/tr.png';
import move1 from '../../../images/movies/quantamania.350x0.jpg';
import svg1 from '../../../svgs/select_icon.svg';
import styled from './home.module.scss';

function Home(): JSX.Element {
  return (
    <div className={styled.home}>
      <Slider />
      <div className={styled.home__tab}>
        <div className={styled.home__tab__header}>
          <button className={styled.home__tab__header__btn}>TODAY</button>
          <button className={styled.home__tab__header__btn}>SCHEDULE</button>
          <button className={styled.home__tab__header__btn}>SOON</button>
        </div>
        <div className={styled.home__tab__body}>
          <div className={styled.home__tab__body__container}>
            <div className={styled.home__tab__body__container__today}>
              <div className={styled.home__tab__body__container__today__up}>
                <div className={styled.home__tab__body__container__today__up__drop}>
                  {/* <select style={{ backgroundImage: `url(${String(svg1)})` }} name="cinemas">
                    <option value="0">Cinema</option>
                    <option value="1">28 Mall</option>
                    <option value="2">Ganjlik Mall</option>
                    <option value="3">Deniz Mall</option>
                    <option value="4">Amburan Mall</option>
                    <option value="5">Ganja Mall (Ganja)</option>
                    <option value="6">Nakhchivan</option>
                    <option value="7">Shamakhy</option>
                  </select> */}
                  <input className={styled.dark_light} type="checkbox" id="dark-light" name="dark-light" />
                  <label htmlFor="dark-light"></label>

                  <div className={styled.light_back}></div>

                  <a href="home" className={styled.logo} target="_blank">
                    <img src="https://assets.codepen.io/1462889/fcy.png" alt="ffgdg" />
                  </a>

                  <div className={styled.sec_center}>
                    <input className={styled.dropdown} type="checkbox" id="dropdown" name="dropdown" />
                    <label className={styled.for_dropdown} htmlFor="dropdown">
                      Dropdown Menu <i className={[styled.uil, styled.uil_arrow_down].join(' ')}></i>
                    </label>
                    <div className={styled.section_dropdown}>
                      <a href="#">
                        Dropdown Link <i className={styled.uil}></i>
                      </a>
                      <input className="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub" />
                      <label className="for-dropdown-sub" htmlFor="dropdown-sub">
                        Dropdown Sub <i className="uil uil-plus"></i>
                      </label>
                      <div className="section-dropdown-sub">
                        <a href="#">
                          Dropdown Link <i className="uil uil-arrow-right"></i>
                        </a>
                        <a href="#">
                          Dropdown Link <i className="uil uil-arrow-right"></i>
                        </a>
                      </div>
                      <a href="#">
                        Dropdown Link <i className="uil uil-arrow-right"></i>
                      </a>
                      <a href="#">
                        Dropdown Link <i className="uil uil-arrow-right"></i>
                      </a>
                    </div>
                  </div>
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
                  <div className={styled.home__tab__body__container__today__middle__body__movie}>
                    <div className={styled.home__tab__body__container__today__middle__body__movie__presale}>
                      PRESALE
                    </div>
                    <h2>Ant-Man and the Wasp: Quantumania</h2>
                    <div className={styled.home__tab__body__container__today__middle__body__movie__content}>
                      <span>12+</span>
                      <div className={styled.home__tab__body__container__today__middle__body__movie__content__poster}>
                        <img src={move1} alt="movie" />
                      </div>
                      <div className={styled.home__tab__body__container__today__middle__body__movie__content__icons}>
                        <span
                          className={
                            styled.home__tab__body__container__today__middle__body__movie__content__icons__icon
                          }
                        >
                          <span>
                            <b></b>
                            Film 4DX formatinda nümayiş olunur
                          </span>
                          <img src={icon1} alt="fourdx" />
                        </span>
                        <span
                          className={
                            styled.home__tab__body__container__today__middle__body__movie__content__icons__icon
                          }
                        >
                          <span>
                            <b></b>
                            Movie format: 3D
                          </span>
                          <img src={icon2} alt="threed" />
                        </span>
                        <span
                          className={
                            styled.home__tab__body__container__today__middle__body__movie__content__icons__icon
                          }
                        >
                          <span>
                            <b></b>
                            Movie language: Rus
                          </span>
                          <img src={icon3} alt="russian" />
                        </span>
                        <span
                          className={
                            styled.home__tab__body__container__today__middle__body__movie__content__icons__icon
                          }
                        >
                          <span>
                            <b></b>
                            Movie language: Tur
                          </span>
                          <img src={icon4} alt="turkish" />
                        </span>
                        <span
                          className={
                            styled.home__tab__body__container__today__middle__body__movie__content__icons__icon
                          }
                        >
                          <span>
                            <b></b>
                            Movie language: Eng
                          </span>
                          <img src={icon5} alt="english" />
                        </span>
                      </div>
                    </div>
                  </div>
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
