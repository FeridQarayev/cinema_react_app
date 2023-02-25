import React from 'react';
import { Link } from 'react-router-dom';
import backImg from '../../../images/admin/pattern_h.png';
import { ReactComponent as Cinema } from '../../../svgs/building-solid.svg';
import { ReactComponent as Gauge } from '../../../svgs/gauge-high-solid.svg';
import styled from './navbar.module.scss';

function Navbar(): JSX.Element {
  return (
    <nav className={styled.navbar} style={{ backgroundImage: `url(${String(backImg)})` }}>
      <div className={styled.navbar__header}></div>
      <div className={styled.navbar__body}>
        <h4>My Cinema</h4>
        <ul className={styled.navbar__body__list}>
          <li className={styled.navbar__body__list}>
            <Link to={'#'}>
              <Gauge />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={styled.navbar__body__list}>
            <Link to={'#'}>
              <Cinema />
              <span>Cinema</span>
            </Link>
          </li>
          <li className={styled.navbar__body__list}>
            <Link to={'#'}>
              <Gauge />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={styled.navbar__body__list}>
            <Link to={'#'}>
              <Cinema />
              <span>Cinema</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
