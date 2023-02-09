import React from 'react';
import Slider from '../../../components/base/slider';
import styled from './home.module.scss';

function Home(): JSX.Element {
  return (
    <div className={styled.home}>
      <Slider />
    </div>
  );
}

export default Home;
