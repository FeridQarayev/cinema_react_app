import React from 'react';
import { Link } from 'react-router-dom';
import adminImg from '../../../images/admin/admin-image-png-3.png';
import backImg from '../../../images/admin/pattern_h.png';
import { ReactComponent as Exit } from '../../../svgs/arrow-right-from-bracket-solid.svg';
import { ReactComponent as Cinema } from '../../../svgs/building-solid.svg';
import { ReactComponent as Gauge } from '../../../svgs/gauge-high-solid.svg';
import styled from './navbar.module.scss';

function Navbar(): JSX.Element {
  return (
    <>
      <nav className={styled.navbar} style={{ backgroundImage: `url(${String(backImg)})` }}>
        <div className={styled.navbar__body}>
          <h4>My Cinema</h4>
          <ul className={styled.navbar__body__list}>
            <li className={styled.navbar__body__list__item}>
              <Link to={''}>
                <Gauge />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={styled.navbar__body__list__item}>
              <Link to={'cinema'}>
                <Cinema />
                <span>Cinema</span>
              </Link>
            </li>
            <li className={styled.navbar__body__list__item}>
              <Link to={'hall'}>
                <Gauge />
                <span>Hall</span>
              </Link>
            </li>
            <li className={styled.navbar__body__list__item}>
              <Link to={'#'}>
                <Cinema />
                <span>Cinema</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styled.topbar}>
        <nav className={styled.topbar__container}>
          <div className={styled.topbar__container__full}>
            <div className={styled.topbar__container__full__right}>
              <div className={styled.topbar__container__full__right__info}>
                <ul>
                  <li>
                    <Link to={'#'}>
                      <img src={adminImg} alt="admin" />
                      <span>John David</span>
                    </Link>
                    <div className={styled.dropdown}>
                      <Link to={'#'}>
                        Log Out
                        <Exit />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
