import React from 'react';
import { Link } from 'react-router-dom';
import adminImg from '../../../images/admin/admin-image-png-3.png';
import backImg from '../../../images/admin/pattern_h.png';
import { ReactComponent as Exit } from '../../../svgs/arrow-right-from-bracket-solid.svg';
import { ReactComponent as Cinema } from '../../../svgs/building-solid.svg';
import { ReactComponent as Film } from '../../../svgs/film-solid.svg';
import { ReactComponent as Gauge } from '../../../svgs/gauge-high-solid.svg';
import { ReactComponent as Hall } from '../../../svgs/gopuram-solid.svg';
import { ReactComponent as Dollar } from '../../../svgs/sack-dollar-solid.svg';
import { ReactComponent as Ticket } from '../../../svgs/ticket-solid.svg';
import styled from './navbar.module.scss';

function Navbar(): JSX.Element {
  const user: { firstName: string; lastName: string } = JSON.parse(String(localStorage.getItem('user')));
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
                <Hall />
                <span>Hall</span>
              </Link>
            </li>
            <li className={styled.navbar__body__list__item}>
              <Link to={'movie'}>
                <Film />
                <span>Movie</span>
              </Link>
            </li>
            <li className={styled.navbar__body__list__item}>
              <Link to={'session'}>
                <Ticket />
                <span>Session</span>
              </Link>
            </li>
            <li className={styled.navbar__body__list__item}>
              <Link to={'sale'}>
                <Dollar />
                <span>Sale</span>
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
                      <span>
                        {user?.firstName}
                        &nbsp;
                        {user?.lastName}
                      </span>
                    </Link>
                    <div className={styled.dropdown}>
                      <Link
                        to={'../home'}
                        onClick={() => {
                          localStorage.removeItem('user');
                        }}
                      >
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
