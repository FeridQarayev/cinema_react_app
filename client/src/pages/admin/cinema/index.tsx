import React from 'react';
import styled from './cinema.module.scss';

function CinemaAdmin(): JSX.Element {
  return (
    <div className={styled.cinema}>
      <div className={styled.cinema__container}>
        <div className={styled.cinema__container__title}>
          <div className={styled.cinema__container__title__col}>
            <div>
              <h2>Cinemas</h2>
            </div>
          </div>
        </div>
        <div className={styled.cinema__container__body}></div>
      </div>
    </div>
  );
}

export default CinemaAdmin;
