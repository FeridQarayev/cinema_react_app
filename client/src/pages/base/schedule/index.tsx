import React from 'react';
import topRight from '../../../images/schedule/bobine.png';
import bottomLeft from '../../../images/schedule/bottom-left.png';
import bottomRight from '../../../images/schedule/bottom-right.png';
import middleDown from '../../../images/schedule/glasses-1.png';
import topLeft from '../../../images/schedule/top-left.png';
import styled from './schedule.module.scss';

function Schedule(): JSX.Element {
  return (
    <div className={styled.schedule}>
      <section className={styled.schedule__up}>
        <div className={styled.schedule__up__container}>
          <div className={styled.schedule__up__container__content}>
            <div className={styled.schedule__up__container__content__col}>
              <div className={styled.schedule__up__container__content__col__def}>
                <div className={styled.schedule__up__container__content__col__def__inner}>
                  <div className={styled.schedule__up__container__content__col__def__inner__wrap}>
                    <div className={styled.schedule__up__container__content__col__def__inner__wrap__force}>
                      <div className={styled.schedule__up__container__content__col__def__inner__wrap__force__rev}>
                        <div className={styled.progress}>
                          <div className={styled.progress__back}></div>
                        </div>
                        <div className={styled.slides}>
                          <div className={styled.slides__slide}>
                            <div className={styled.slides__slide__text}>
                              <p>A Video WordPress Theme </p>
                            </div>
                            <div className={styled.slides__slide__middledown}>
                              <div>
                                <img src={middleDown} alt="galesses" />
                              </div>
                            </div>
                            <div className={styled.slides__slide__topleft}>
                              <div>
                                <div>
                                  <img src={topLeft} alt="popcorn" />
                                </div>
                              </div>
                            </div>
                            <div className={styled.slides__slide__bottomright}>
                              <div>
                                <div>
                                  <img src={bottomRight} alt="popcorn" />
                                </div>
                              </div>
                            </div>
                            <div className={styled.slides__slide__bottomleft}>
                              <div>
                                <img src={bottomLeft} alt="popcorn" />
                              </div>
                            </div>
                            <div className={styled.slides__slide__topright}>
                              <div>
                                <img src={topRight} alt="cola" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styled.schedule__up__container__content__col__def__inner__wrap__force__fw}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
