import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
              <div className={styled.sign__main__container__body__register__up}>
                <h4>Sign Up</h4>
              </div>
              <div className={styled.sign__main__container__body__register__down}>
                <form className={styled.sign__main__container__body__register__down__form} action="#">
                  <p className={styled.sign__main__container__body__register__down__form__status}></p>
                  <div className={styled.sign__main__container__body__register__down__form__group}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                  </div>
                  <div className={styled.sign__main__container__body__register__down__form__group}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                  </div>
                  <div className={styled.sign__main__container__body__register__down__form__group}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                  </div>
                  <div className={styled.sign__main__container__body__register__down__form__group}>
                    <button>Register</button>
                  </div>
                </form>
                <div className={styled.sign__main__container__body__register__down__bottom}>
                  <span>
                    Already have an account?
                    <a href="#">Sign In</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link className={styled.sign__main__container__link} to={'home'} />
        </div>
      </main>
    </div>
  );
}

export default Sign;
