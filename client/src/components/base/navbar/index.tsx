import React, { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from './navbar.module.scss';

function Navbar(): JSX.Element {
  const list = useRef<HTMLUListElement>(null);
  const openBurger = (e: HTMLButtonElement): void => {
    if (list.current != null) list.current.classList.toggle(styled.active);
    e.classList.toggle(styled.active);
  };

  return (
    <Fragment>
      <header className={styled.header}>
        <div className={styled.header__container}>
          <div className={styled.header__container__body}>
            <div className={styled.header__container__body__logo}>
              <Link to={'home'}>
                You
                <span>video.</span>
              </Link>
            </div>
            <div className={styled.header__container__body__menu}>
              <div className={styled.header__container__body__menu__nav}>
                <nav className={styled.header__container__body__menu__nav__list}>
                  <ul className={styled.header__container__body__menu__nav__list__ul}>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'home'}>Demos</Link>
                    </li>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'home'}>Movies</Link>
                    </li>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'home'}>Shows</Link>
                    </li>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'home'}>Premium</Link>
                    </li>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'home'}>Pages</Link>
                    </li>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'home'}>Admin</Link>
                    </li>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'home'}>Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={styled.header__container__body__menu__login}>
                <Link to={'home'}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={styled.mobile_bar}>
        <button
          className={styled.mobile_bar__link}
          onClick={(e) => {
            openBurger(e.currentTarget);
          }}
        >
          <span className={styled.mobile_bar__link__sp1}></span>
          <span className={styled.mobile_bar__link__sp2}></span>
          <span className={styled.mobile_bar__link__sp3}></span>
        </button>
        <nav className={styled.mobile_bar__nav}>
          <ul ref={list} className={styled.mobile_bar__nav__ul}>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'home'}>Demos</Link>
            </li>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'home'}>Movies</Link>
            </li>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'home'}>Shows</Link>
            </li>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'home'}>Premium</Link>
            </li>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'home'}>Pages</Link>
            </li>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'home'}>Admin</Link>
            </li>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'home'}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <header className={styled.mobile_header}>
        <div className={styled.mobile_header__container}>
          <div className={styled.mobile_header__container__body}>
            <div className={styled.mobile_header__container__body__logo}>
              <Link to={'home'}>
                You
                <span>video.</span>
              </Link>
            </div>
            <div className={styled.mobile_header__container__body__menu}></div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Navbar;