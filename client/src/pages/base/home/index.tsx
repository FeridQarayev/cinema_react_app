import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Movie from '../../../components/base/movie';
import Slider from '../../../components/base/slider';
import seperatorImg from '../../../images/movies/seperator-bg.png';
import paralImg from '../../../images/parallax/banner-7.jpg';
import banner from '../../../images/slider/banner-3.png';
import avatarImg from '../../../images/watch-more/avatar.png';
import blackadamImg from '../../../images/watch-more/black_adam.png';
import moreLogoImg from '../../../images/watch-more/FHCLOGOPLUSVERTICAL.jpg';
import secretImg from '../../../images/watch-more/secret.png';
import wakandaImg from '../../../images/watch-more/wakanda.png';
import womenkingImg from '../../../images/watch-more/woman_king.png';
import worryImg from '../../../images/watch-more/worry.png';
import type IMovie from '../../../interfaces/movie';
import { movieGetAll } from '../../../services/movie';
import { ReactComponent as PlaySvg } from '../../../svgs/circle-play-solid.svg';
import { ReactComponent as PatternSvg } from '../../../svgs/pattern-logo.svg';
import starhalfsvg from '../../../svgs/star-half-solid.svg';
import starsvg from '../../../svgs/star-solid.svg';
import { ReactComponent as WatchSvg } from '../../../svgs/watch-more.svg';
import styled from './home.module.scss';

function getDateByDay(day: number): Date {
  return new Date(new Date().setDate(new Date().getDate() + day));
}

function Home(): JSX.Element {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    void movieGetAll()
      .then((res) => {
        setMovies(res.data);
      })
      .then(() => {
        setMovies((oldmovie) => oldmovie.filter((mov) => new Date(mov.sessionTime).toLocaleDateString() < getDateByDay(1).toLocaleDateString()));
      });
  }, []);
  return (
    <div className={styled.home}>
      <Slider />

      <section className={styled.home__more}>
        <div className={styled.home__more__pattern}>
          <PatternSvg />
        </div>
        <div className={styled.home__more__container}>
          <div className={styled.home__more__container__header}>
            <div className={styled.home__more__container__header__title}>
              <WatchSvg />
              <span>Watch More For Less</span>
            </div>
          </div>
          <div className={styled.home__more__container__content}>
            <div className={styled.home__more__container__content__info}>
              <div className={styled.home__more__container__content__info__logo}>
                <span className={styled.home__more__container__content__info__logo__body}>
                  <span></span>
                  <img className={styled.home__more__container__content__info__logo__body__img} src={moreLogoImg} alt="logo" />
                </span>
              </div>
              <div className={styled.home__more__container__content__info__title}>
                Join our&nbsp;
                <span>Club</span> and enjoy free UNLIMITED tickets, up to 15% off food items, exclusive access to events
              </div>
              <div className={styled.home__more__container__content__info__action}>
                <Link to={'/schedule'}>
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.home__more__images}>
          <div className={styled.home__more__images__more}>
            <div className={styled.home__more__images__more__row}>
              <div className={styled.home__more__images__more__row__wrapper}>
                <span>
                  <img src={avatarImg} alt="avatar" />
                </span>
              </div>
              <div className={styled.home__more__images__more__row__wrapper}>
                <span>
                  <img src={wakandaImg} alt="wakanda" />
                </span>
              </div>
            </div>
            <div className={styled.home__more__images__more__row}>
              <div className={styled.home__more__images__more__row__wrapper}>
                <span>
                  <img src={blackadamImg} alt="blackadam" />
                </span>
              </div>
              <div className={styled.home__more__images__more__row__wrapper}>
                <span>
                  <img src={womenkingImg} alt="womenking" />
                </span>
              </div>
            </div>
            <div className={styled.home__more__images__more__row}>
              <div className={styled.home__more__images__more__row__wrapper}>
                <span>
                  <img src={secretImg} alt="secret" />
                </span>
              </div>
              <div className={styled.home__more__images__more__row__wrapper}>
                <span>
                  <img src={worryImg} alt="worry" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styled.home__today}>
        <div className={styled.home__today__container}>
          <div className={styled.home__today__container__body}>
            <div className={styled.home__today__container__body__container}>
              <div className={styled.home__today__container__body__container__header}>
                <div>
                  <div>
                    <header>
                      <span style={{ backgroundImage: `url(${String(seperatorImg)})` }}></span>
                      <h2>
                        <span>To Day</span>
                      </h2>
                      <span style={{ backgroundImage: `url(${String(seperatorImg)})` }}></span>
                    </header>
                  </div>
                </div>
              </div>
              <div className={styled.home__today__container__body__container__content}>
                <div className={styled.home__today__container__body__container__content__con}>
                  <div className={styled.home__today__container__body__container__content__con__grid}>
                    <div className={styled.home__today__container__body__container__content__con__grid__row}>
                      {movies.map((movie) => (
                        <Movie key={movie._id} data={movie} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundImage: `url(${String(banner)}` }} className={styled.home__parallax}>
        <div className={styled.home__parallax__container}>
          <div className={styled.home__parallax__container__body}>
            <div className={styled.home__parallax__container__body__left}>
              <div className={styled.home__parallax__container__body__left__content}>
                <h2>Avengers: Endgame</h2>
                <ul>
                  <li>
                    <img src={starsvg} alt="star" />
                  </li>
                  <li>
                    <img src={starsvg} alt="star" />
                  </li>
                  <li>
                    <img src={starsvg} alt="star" />
                  </li>
                  <li>
                    <img src={starsvg} alt="star" />
                  </li>
                  <li>
                    <img src={starhalfsvg} alt="starhalf" />
                  </li>
                </ul>
                <h6>
                  <strong>Rating: </strong>
                  9.6 (lmdb)
                </h6>
                <h6>
                  <strong>Time: </strong>
                  2h 50 min
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                  ever since the 1500s
                </p>
                <div className={styled.home__parallax__container__body__left__content__btn}>
                  <button>Watch</button>
                  <button>+ Add To Watchlist</button>
                </div>
              </div>
            </div>
            <div className={styled.home__parallax__container__body__right}>
              <div className={styled.home__parallax__container__body__right__about}>
                <img src={paralImg} alt="paralimg" />
                <div className={styled.home__parallax__container__body__right__about__play}>
                  <a href="https://www.youtube.com/embed/TcMBFSGVi1c">
                    <PlaySvg />
                    <br />
                    <span>Play video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
