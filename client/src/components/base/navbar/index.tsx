import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from './navbar.module.scss';

function Navbar(): JSX.Element {
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
        <Link className={styled.mobile_bar__link} to={'home'}>
          <span></span>
          <span></span>
          <span></span>
        </Link>
        <nav className={styled.mobile_bar__nav}>
          <ul className={styled.mobile_bar__nav__ul}>
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
