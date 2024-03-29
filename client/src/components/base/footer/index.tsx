import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as FacebookSvg } from '../../../svgs/facebook-f.svg';
import { ReactComponent as LinkedinSvg } from '../../../svgs/linkedin-in.svg';
import { ReactComponent as TelegramSvg } from '../../../svgs/telegram.svg';
import { ReactComponent as TwitterSvg } from '../../../svgs/twitter.svg';
import styled from './footer.module.scss';

function Footer(): JSX.Element {
  const location = useLocation();

  return (
    <Fragment>
      <footer
        className={styled.footer}
        style={location.pathname.includes('/signin') || location.pathname.includes('/signup') ? { display: 'none' } : { listStyle: 'none' }}
      >
        <div className={styled.footer__container}>
          <div className={styled.footer__container__body}>
            <div className={styled.footer__container__body__item}>
              <div className={styled.footer__container__body__item__logo}>
                <Link to={'home'}>
                  You
                  <span>video.</span>
                </Link>
              </div>
              <p className={styled.footer__container__body__item__text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
              </p>
              <ul className={styled.footer__container__body__item__media}>
                <li>
                  <Link to={'#'}>
                    <FacebookSvg />
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <TwitterSvg />
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <LinkedinSvg />
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <TelegramSvg />
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styled.footer__container__body__item}>
              <h4>Movies</h4>
              <div className={styled.footer__container__body__item__row}>
                <div className={styled.footer__container__body__item__row__col}>
                  <ul className={styled.footer__container__body__item__row__col__list}>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Drama</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Action</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Animation</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Comedy</Link>
                    </li>
                  </ul>
                </div>
                <div className={styled.footer__container__body__item__row__col}>
                  <ul className={styled.footer__container__body__item__row__col__list}>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Crime</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Fantacy</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Horror</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Romance</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styled.footer__container__body__item}>
              <h4>Tv Shows</h4>
              <div className={styled.footer__container__body__item__row}>
                <div className={styled.footer__container__body__item__row__col}>
                  <ul className={styled.footer__container__body__item__row__col__list}>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Breaking Bad</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Grimm</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Friends</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Supergirl</Link>
                    </li>
                  </ul>
                </div>
                <div className={styled.footer__container__body__item__row__col}>
                  <ul className={styled.footer__container__body__item__row__col__list}>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Crime</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Fantacy</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Horror</Link>
                    </li>
                    <li className={styled.footer__container__body__item__row__col__list__item}>
                      <Link to={'#'}>Romance</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styled.footer__container__body__item}>
              <h4>My Account</h4>
              <ul className={styled.footer__container__body__item__row__col__list}>
                <li className={styled.footer__container__body__item__row__col__list__item}>
                  <Link to={'#'}>Breaking Bad</Link>
                </li>
                <li className={styled.footer__container__body__item__row__col__list__item}>
                  <Link to={'#'}>Grimm</Link>
                </li>
                <li className={styled.footer__container__body__item__row__col__list__item}>
                  <Link to={'#'}>Friends</Link>
                </li>
                <li className={styled.footer__container__body__item__row__col__list__item}>
                  <Link to={'#'}>Supergirl</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={styled.copyright}
        style={location.pathname.includes('/signin') || location.pathname.includes('/signup') ? { display: 'none' } : { listStyle: 'none' }}
      >
        <p>YouVideo - © 2021 All Rights Reserved</p>
      </div>
    </Fragment>
  );
}

export default Footer;
