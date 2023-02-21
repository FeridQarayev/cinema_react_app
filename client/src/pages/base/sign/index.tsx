import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Register from '../../../components/base/register';
import backImg from '../../../images/constant/movie-collection.jpg';
import styled from './sign.module.scss';

function Sign(): JSX.Element {
  const signDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    signDiv.current?.previousElementSibling?.classList.add(styled.hide);
    signDiv.current?.previousElementSibling?.previousElementSibling?.classList.add(styled.hide);
    signDiv.current?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add(styled.hide);
    signDiv.current?.nextElementSibling?.classList.add(styled.hide);
    signDiv.current?.nextElementSibling?.nextElementSibling?.classList.add(styled.hide);
  });
  return (
    <div ref={signDiv} className={styled.sign}>
      <main className={styled.sign__main} style={{ backgroundImage: `url(${String(backImg)})` }}>
        <div className={styled.sign__main__container}>
          <div className={styled.sign__main__container__body}>
            <div className={styled.sign__main__container__body__register}>
              <Register />
            </div>
          </div>
          <Link className={styled.sign__main__container__link} to={'home'} />
        </div>
      </main>
    </div>
  );
}

export default Sign;
