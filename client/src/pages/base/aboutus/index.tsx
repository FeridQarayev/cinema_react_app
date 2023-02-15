import React, { useRef } from 'react';
import record from '../../../images/aboutus/maxresdefault-11.jpg';
import video from '../../../videos/Free HD Stock Film 8mm Projector broll.mp4';
import styled from './aboutus.module.scss';

function AboutUs(): JSX.Element {
  const videoTag = useRef<HTMLVideoElement>(null);
  window.addEventListener('scroll', (e) => {
    if (videoTag.current !== null && window.pageYOffset < 700) {
      videoTag.current.style.transform = String(`translate3d(0px, ${window.pageYOffset}px, 0px)`);
    }
  });
  return (
    <div className={styled.about}>
      <section className={styled.about__up}>
        <div className={styled.about__up__back}>
          <img src={record} alt="cinema" />
          <div className={styled.about__up__back__video}>
            <video ref={videoTag} preload="auto" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styled.about__up__color}></div>
        <div className={styled.about__up__body}>
          <div className={styled.about__up__body__container}>
            <div className={styled.about__up__body__container__text}>
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styled.about__body}>
        <div className={styled.about__body__overlay}></div>
        <div className={styled.about__body__container}>
          <div className={styled.about__body__container__content}>
            <h1>“CinemaPlus”</h1>
            <div className={styled.about__body__container__content__decription}>
              <p>CinemaPlus şəbəkəsinə 9 kinoteatr, 50+ ekran və 5000+ oturacaq daxildir.</p>
              <p>
                Yüksək ölçülü 3D-kontentini nümayiş etdirmək imkani olan rəqəmsal proyeksiya sistemi və yüksək keyfiyyətli kinoekranlar ilə təchiz
                olunub. Həmçinin, gücləndirilmiş parlaqliq və “Enhanced 4K Barco” dəqiq təsvirinə malikdir. Bütün bunlar və başqa amillər kinofilmləri
                ən yaxşi keyfiyyətdə nümayiş etdirmək imkani yaradir.
              </p>
              <p>
                “CinemaPlus” kinoteatrlar şəbəkəsinin tətbiq etdiyi “Platinum Movie Suites” konsepsiyasi tamaşaçilara yüksək komfortlu, dəbdəbəli və
                dəridən hazirlanmiş, söykənəcəyi tam arxaya açilan italyan və ispan kreslolarda film izləmək və kinoseans zamani qida və içkiləri
                sifariş etmək imkani yaradir.
              </p>
              <p>
                Həmçinin kinoteatrda, zallarin yuxari pillələrində yerləşən, 6 nəfərdən 12 nəfərə kimi oturacaqlari olan 6 şüşəli mini Skybox zallari
                var. Tamaşaçilar fərdi işiqlandirma və gadjetlərin şarj cihazi ilə təchiz olunmuş rahat oturacaqlarda film izləməkdən zövq ala
                biləcəklər. Hər bir Skybox zalina giriş lift ilə mümkündür.
              </p>
              <p>
                Kinoteatrda xüsusi qonaqlar üçün quraşdirilmiş masalar və ayaq dayaği olan geniş, rahat, avtomatik qatlanan oturacaqlarla təchiz
                olunmuş iki VIP DIAMOND zallari var. Bütün oturacaqlar bir-birindən müəyyən məsafədə yerləşir, bu da rahatliq mühiti yaradir. Son
                siralarda, ev şəraitini xatirladan rahat divanlar var.
              </p>
              <p>Bundan əlavə “CinemaPlus” Azərbaycanda ilk dəfə Dolby Atmos texnologiyasi tətbiq edib.</p>
              <p>
                Səs müşayiətini kinoteatrin istənilən yerinə yerləşdirmək və yerini dəyişmək imkani hesabina Dolby Digital Atmos film yaradicilarina
                kinoda səsi yeni bir mərhələyə çixarmaq imkan yaradir. Nəticədə tamaşaçi ekranda baş verənləri sadəcə izləmir, hadisənin mərkəzinə
                daxil olur.
                <br />
                Həmçinin, 4DX formati ölkəmizdə yalniz “CinemaPlus” kinoteatrinda tətbiq olunur. 4DX innovativ kinoteatr texnologiyasi kəskin süjetli
                blokbasterləri və qorxu filmlərini hərəkət, firlanma və kreslodan titrəyişlər, su damcilari və külək, ildirim və qar, sabun köpükləri
                və ətir kimi əlavə xüsusi effektlər ilə vizual effektlərini genişləndirir. Bunun nəticəsində 4DX, tamaşaçilari böyük ekranda baş verən
                hadisələrə sövq etməklə kino sənayesində ən valehedici formatlardan biri hesab olunur.
              </p>
            </div>
            <ul className={styled.about__body__container__content__hall}>
              <li>
                <span>28 Mall</span>
              </li>
              <li>
                <span>Ganjlik Mall</span>
              </li>
              <li>
                <span>Deniz Mall</span>
              </li>
              <li>
                <span>Azerbaijan Cinema</span>
              </li>
              <li>
                <span>Amburan Mall</span>
              </li>
              <br />
              <li>
                <span>Sumqayit</span>
              </li>
              <li>
                <span>Khamsa Park (Ganja)</span>
              </li>
              <li>
                <span>Ganja Mall (Ganja)</span>
              </li>
              <li>
                <span>Şamaxi</span>
              </li>
              <li>
                <span>Naxçivan</span>
              </li>
            </ul>
            <div className={styled.about__body__container__content__item}></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
