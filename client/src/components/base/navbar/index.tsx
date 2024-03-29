import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { verifyAdminWithToken } from '../../../services/verify.admin';
import { verifyToken } from '../../../services/verify.toke';
import styled from './navbar.module.scss';

function Navbar(): JSX.Element {
  const list = useRef<HTMLElement>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [verify, setVerify] = useState(false);
  const location = useLocation();
  const openBurger = (e: HTMLButtonElement): void => {
    if (list.current != null) list.current.classList.toggle(styled.active);
    e.classList.toggle(styled.active);
  };
  const user = JSON.parse(String(localStorage.getItem('user')));
  useEffect(() => {
    if (user !== undefined && user !== null) {
      void verifyAdminWithToken()
        .then((res) => {
          if (res.status === 200) setIsAdmin(true);
          else setIsAdmin(false);
        })
        .catch(() => {
          setIsAdmin((oldadmin) => (oldadmin = false));
        });
      void verifyToken(user.token)
        .then((res) => {
          if (res.status === 200) setVerify(true);
          else {
            localStorage.removeItem('user');
            setVerify(false);
          }
        })
        .catch(() => {
          setVerify(false);
          localStorage.removeItem('user');
        });
    }
  }, [user]);
  return (
    <Fragment>
      <header
        className={styled.header}
        style={location.pathname.includes('/signin') || location.pathname.includes('/signup') ? { display: 'none' } : { listStyle: 'none' }}
      >
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
                      <Link to={'schedule'}>Schedule</Link>
                    </li>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'comingsoon'}>ComingSoon</Link>
                    </li>
                    <li className={styled.header__container__body__menu__nav__list__ul__li}>
                      <Link to={'aboutus'}>About Us</Link>
                    </li>
                    {verify && (
                      <li className={styled.header__container__body__menu__nav__list__ul__li}>
                        <Link to={'orders'}>My Orders</Link>
                      </li>
                    )}
                    {!verify && (
                      <li className={styled.header__container__body__menu__nav__list__ul__li}>
                        <Link to={'signup'}>Register</Link>
                      </li>
                    )}
                    {isAdmin && (
                      <li className={styled.header__container__body__menu__nav__list__ul__li}>
                        <Link to={'admin'}>Admin</Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
              <div className={styled.header__container__body__menu__login}>{!verify && <Link to={'signin'}>Login</Link>}</div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={styled.mobile_bar}
        style={location.pathname.includes('/signin') || location.pathname.includes('/signup') ? { display: 'none' } : { listStyle: 'none' }}
      >
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
        <nav ref={list} className={styled.mobile_bar__nav}>
          <ul className={styled.mobile_bar__nav__ul}>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'schedule'}>Schedule</Link>
            </li>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'comingsoon'}>ComingSoon</Link>
            </li>
            <li className={styled.mobile_bar__nav__ul__li}>
              <Link to={'aboutus'}>About Us</Link>
            </li>
            {verify && (
              <li className={styled.header__container__body__menu__nav__list__ul__li}>
                <Link to={'orders'}>My Orders</Link>
              </li>
            )}
            {!verify && (
              <>
                <li className={styled.mobile_bar__nav__ul__li}>
                  <Link to={'signup'}>Register</Link>
                </li>
                <li className={styled.mobile_bar__nav__ul__li}>
                  <Link to={'signin'}>Login</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <li className={styled.mobile_bar__nav__ul__li}>
                <Link to={'admin'}>Admin</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <header
        className={styled.mobile_header}
        style={location.pathname.includes('/signin') || location.pathname.includes('/signup') ? { display: 'none' } : { listStyle: 'none' }}
      >
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
