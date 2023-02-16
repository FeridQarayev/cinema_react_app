import React from 'react';
import avatarBack from '../../../images/slider/banner-2.jpg';
import styled from './detail.module.scss';

function Detail(): JSX.Element {
  return (
    <div className={styled.detail}>
      <section className={styled.detail__up}>
        <img src={avatarBack} alt="avatar" />
      </section>
    </div>
  );
}

export default Detail;
