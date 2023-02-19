import { Box, Modal } from '@mui/material';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useRef, useMemo, useState, createElement } from 'react';
import azImg from '../../../images/constant/ni_aze_white.png';
import enImg from '../../../images/constant/ni_eng_white.png';
import fourDxImg from '../../../images/constant/ni_fourdx_white.png';
import ruImg from '../../../images/constant/ni_rus_white.png';
import d3 from '../../../images/constant/ni_threed_white.png';
import turImg from '../../../images/constant/ni_tur_white.png';
import d2 from '../../../images/constant/ni_twod_white.png';
import screenImg from '../../../images/constant/zone_footer.png';
import backimg from '../../../images/schedule/bg.jpg';
import topRight from '../../../images/schedule/bobine.png';
import bottomLeft from '../../../images/schedule/bottom-left.png';
import bottomRight from '../../../images/schedule/bottom-right.png';
import middleDown from '../../../images/schedule/glasses-1.png';
import topLeft from '../../../images/schedule/top-left.png';
import placeSvg from '../../../svgs/places_icon.svg';
import styled from './schedule.module.scss';

interface MovieList {
  id: number;
  name: string;
  sessions: string;
  cinema: string;
  hall: string;
  formats: string[];
  languages: string[];
  price: number;
  places: number;
}
interface Hall {
  column: number;
  row: number;
  price: number;
}

const data: MovieList[] = [
  {
    id: 1,
    name: 'John',
    sessions: new Date().toLocaleTimeString(),
    cinema: '28 Mall',
    hall: 'Hall 1',
    formats: ['2D', '3D'],
    languages: ['AZ', 'RU'],
    price: 12,
    places: 1,
  },
  {
    id: 2,
    name: 'Ant-Man and the Wasp: Quantumania',
    sessions: new Date().toLocaleTimeString(),
    cinema: 'Deniz Mall',
    hall: 'Hall 2',
    formats: ['2D', '3D'],
    languages: ['AZ', 'EN'],
    price: 18,
    places: 2,
  },
  {
    id: 3,
    name: 'Plane',
    sessions: new Date().toLocaleTimeString(),
    cinema: '28 Mall',
    hall: 'Hall 4',
    formats: ['2D', '3D'],
    languages: ['AZ', 'RU'],
    price: 7,
    places: 3,
  },
];

const bordereds: Hall = {
  column: 10,
  row: 8,
  price: 0,
};
const borderedss: Hall = {
  column: 5,
  row: 3,
  price: 0,
};

const modalStyle = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, 0)',
  maxHeight: '100vh',
  border: 'none',
  boxShadow: 24,
  backgroundColor: '#f3f3f3',
  width: '1000px',
  height: '761px',
  verticalAlign: 'middle',
  overflow: 'auto',
  borderRadius: '15px 15px 15px 15px',
  fontFamily: 'Roboto',
  '&:focus-visible': {
    outline: 'none',
  },
};
function Schedule(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const divTags = useRef<HTMLDivElement[]>([]);
  const [arr, setArr] = useState<Hall>({ column: 0, row: 0, price: 0 });
  const [price, setPrice] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (num: number, price: number): void => {
    setOpen(true);
    bordereds.price = price;
    borderedss.price = price;
    num === 1 ? setArr(bordereds) : setArr(borderedss);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  useEffect(() => {
    container.current?.addEventListener('mousemove', (e) => {
      divTags.current.forEach((divTag) => {
        divTag != null && (divTag.style.transform = String(`perspective(600px) translate3d(${-e.clientX / 100}px, ${-e.clientY / 100}px, 0px)`));
      });
    });
  }, []);
  const columns = useMemo<Array<MRT_ColumnDef<MovieList>>>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        muiTableHeadCellProps: { sx: { color: 'green' } },
      },
      {
        accessorFn: (row) => row.sessions,
        id: 'sessions',
        header: 'Sessions',
      },
      {
        accessorFn: (row) => row.cinema,
        id: 'cinema',
        header: 'Cinema',
      },
      {
        accessorFn: (row) => row.hall,
        id: 'hall',
        header: 'Hall',
      },
      {
        accessorFn: (row) => [row.languages, row.formats],
        id: 'formats',
        header: 'Formats',
        /* eslint-disable react/prop-types */
        Cell: ({ renderedCellValue, row }) => [
          row.original.formats.map((value, index) => (
            <Box
              key={index}
              component="span"
              sx={() => {
                return {
                  borderRadius: '4px',
                  border: '#000 solid 1px',
                  color: '#000',
                  padding: '0 3px',
                  margin: '0px 5px',
                  fontWeight: 'bolder',
                };
              }}
            >
              {value}
            </Box>
          )),
          row.original.languages.map((value, index) => (
            <Box
              key={index}
              component="span"
              sx={() => {
                return {
                  borderRadius: '4px',
                  border: '#000 solid 1px',
                  color: '#000',
                  padding: '0 3px',
                  margin: '0px 5px',
                  fontWeight: 'bolder',
                };
              }}
            >
              {value}
            </Box>
          )),
        ],
        /* eslint-enable react/prop-types */
      },
      {
        accessorFn: (row) => row.price,
        id: 'price',
        header: 'Price',
        /* eslint-disable react/prop-types */
        Cell: ({ cell }) => <Box component="span">{cell.getValue<number>()} AZN</Box>,
        /* eslint-enable react/prop-types */
      },
      {
        accessorFn: (row) => row.places,
        id: 'places',
        header: 'Buy Now',
        /* eslint-disable react/prop-types */
        Cell: ({ cell, row }) => (
          <Box
            component="div"
            onClick={() => {
              handleOpen(cell.getValue<number>(), row.original.price);
            }}
            sx={() => {
              return {
                border: '1px solid #DCDCDC',
                borderRadius: '5px',
                padding: '4px 15px',
                width: '110px',
                margin: 'auto',
                float: 'none',
                position: 'relative',
                background: '#FFFFFF',
                cursor: 'pointer',
              };
            }}
          >
            <Box
              component="span"
              sx={() => {
                return {
                  fontSize: '14px',
                  lineHeight: '16px',
                  color: '#000',
                  teaxtAlign: 'left',
                  width: '100%',
                  paddingRight: '25px',
                  background: `url(${String(placeSvg)}) no-repeat right`,
                };
              }}
            >
              Places{cell.getValue<number>()}
            </Box>
          </Box>
        ),
        /* eslint-enable react/prop-types */
      },
    ],
    []
  );

  const selectPlace = (place: React.MouseEvent<HTMLSpanElement>): void => {
    const placePrice = parseInt(String(place.currentTarget.getAttribute('price')));
    console.log(place.currentTarget.getAttribute('column'));
    console.log(place.currentTarget.getAttribute('price'));
    place.currentTarget.classList.toggle(styled.modal__body__list__select);
    place.currentTarget.classList.value === styled.modal__body__list__select ? setPrice(price + placePrice) : setPrice(price - placePrice);
  };

  const sortedBorder = (hall: Hall): JSX.Element[] => {
    const totalLiBordered: JSX.Element[] = [];
    const totalLiEmpty: JSX.Element[] = [];
    let toppx = 341;
    const rightpx = 20;
    for (let i = 1; i <= hall.column; i++) {
      let leftpx = 95;
      const borderedLiLeft: JSX.Element = createElement(
        'li',
        { key: (Math.random() * new Date().getTime()) / 100, className: styled.modal__body__list__border },
        createElement('b', { style: { top: String(`${toppx}px`) } }, i)
      );
      for (let z = 1; z <= hall.row; z++) {
        const emptyLi: JSX.Element = createElement(
          'li',
          {
            key: (Math.random() * new Date().getTime()) / 1000,
            className: styled.modal__body__list__empty,
          },
          createElement(
            'span',
            {
              onClick: (e: React.MouseEvent<HTMLSpanElement>): void => {
                selectPlace(e);
              },
              style: { left: String(`${leftpx}px`), top: String(`${toppx}px`) },
              row: z,
              column: i,
              price: hall.price,
            },
            z
          )
        );
        leftpx += 34;
        totalLiEmpty.push(emptyLi);
      }
      const borderedLiRight: JSX.Element = createElement(
        'li',
        { key: (Math.random() * new Date().getTime()) / 10, className: styled.modal__body__list__border },
        createElement('b', { style: { top: String(`${toppx}px`), right: String(`${rightpx}px`), left: String('unset') } }, i)
      );
      toppx -= 34;
      totalLiBordered.push(borderedLiLeft);
      totalLiBordered.push(borderedLiRight);
    }
    return [...totalLiBordered, ...totalLiEmpty];
  };
  return (
    <div className={styled.schedule}>
      <section>
        <div className={styled.schedule__img}>
          <img src={backimg} alt="back" />
        </div>
        <div className={styled.schedule__up}>
          <div className={styled.schedule__up__container}>
            <div className={styled.schedule__up__container__content}>
              <div className={styled.schedule__up__container__content__col}>
                <div className={styled.schedule__up__container__content__col__def}>
                  <div className={styled.schedule__up__container__content__col__def__inner}>
                    <div className={styled.schedule__up__container__content__col__def__inner__wrap}>
                      <div className={styled.schedule__up__container__content__col__def__inner__wrap__force}>
                        <div className={styled.schedule__up__container__content__col__def__inner__wrap__force__rev}>
                          <article>
                            <div className={styled.slides}>
                              <div ref={container} className={styled.slides__slide}>
                                <div className={styled.slides__slide__text}>
                                  <h1>Enjoy Watching</h1>
                                </div>
                                <div className={styled.slides__slide__middledown}>
                                  <div>
                                    <img src={middleDown} alt="galesses" />
                                  </div>
                                </div>
                                <div className={styled.slides__slide__topleft}>
                                  <div className={styled.slides__slide__topleft__first}>
                                    <div className={styled.slides__slide__topleft__first__second}>
                                      <img src={topLeft} alt="popcorn" />
                                    </div>
                                  </div>
                                </div>
                                <div className={styled.slides__slide__bottomright}>
                                  <div className={styled.slides__slide__bottomright__first}>
                                    <div className={styled.slides__slide__bottomright__first__second}>
                                      <img src={bottomRight} alt="popcorn" />
                                    </div>
                                  </div>
                                </div>
                                <div ref={(e: HTMLDivElement) => divTags.current.push(e)} className={styled.slides__slide__bottomleft}>
                                  <div>
                                    <img src={bottomLeft} alt="popcorn" />
                                  </div>
                                </div>
                                <div ref={(e: HTMLDivElement) => divTags.current.push(e)} className={styled.slides__slide__topright}>
                                  <div>
                                    <img src={topRight} alt="cola" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className={styled.schedule__up__container__content__col__def__inner__wrap__force__fw}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MaterialReactTable columns={columns} data={data} />

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <div className={styled.modal}>
            Demir Kadin: Neslican
            <br />
            19.02.2023, 13:00
            <br />
            Naxçivan, Zal 3
            <div className={styled.up__icon}>
              <span className={styled.hover__text}>
                <span className={styled.hover__text__content}>
                  <b></b>
                  Film 4DX formatinda nümayiş olunur
                </span>
                <img src={fourDxImg} alt="4DX" />
              </span>
              <span className={styled.hover__text}>
                <span className={styled.hover__text__content}>
                  <b></b>
                  Film 3D formatinda nümayiş olunur
                </span>
                <img src={d3} alt="3D" />
              </span>
              <span className={styled.hover__text}>
                <span className={styled.hover__text__content}>
                  <b></b>
                  Film 2D formatinda nümayiş olunur
                </span>
                <img src={d2} alt="2d" />
              </span>
              <span className={styled.hover__text}>
                <span className={styled.hover__text__content}>
                  <b></b>
                  Film Azərbaycan dilində nümayiş olunur
                </span>
                <img src={azImg} alt="AZ" />
              </span>
              <span className={styled.hover__text}>
                <span className={styled.hover__text__content}>
                  <b></b>
                  Film Türk dilində nümayiş olunur
                </span>
                <img src={turImg} alt="Tu" />
              </span>
              <span className={styled.hover__text}>
                <span className={styled.hover__text__content}>
                  <b></b>
                  Film Rus dilində nümayiş olunur
                </span>
                <img src={ruImg} alt="RU" />
              </span>
              <span className={styled.hover__text}>
                <span className={styled.hover__text__content}>
                  <b></b>
                  Film İngilis dilində nümayiş olunur
                </span>
                <img src={enImg} alt="EN" />
              </span>
            </div>
            <div className={styled.modal__body}>
              <ul className={styled.modal__body__list}>
                {/* {bordereds.map((n, index) => (
                  <li
                    key={index}
                    className={styled.modal__body__list__border}
                    ref={(e: HTMLLIElement) => {
                      borderedList.current.push(e);
                    }}
                  >
                    <b>{n}</b>
                  </li>
                ))} */}
                {sortedBorder(arr)}
                {/* <li className={styled.modal__body__list__border}>
                  <b>2</b>
                </li> */}
                {/* <li
                  className={styled.modal__body__list__empty}
                  onClick={(e) => {
                    console.log(e.currentTarget.children[0]);
                  }}
                >
                  <span>1</span>
                </li> */}

                {/* <li className={styled.modal__body__list__select}>
                  <span>7</span>
                </li>
                <li className={styled.modal__body__list__reserv}>
                  <span>8</span>
                </li> */}
              </ul>
            </div>
            <div className={styled.modal__footer}>
              <span className={styled.modal__footer__screen}>EKRAN</span>
              <div style={{ backgroundImage: `url(${String(screenImg)})` }} className={styled.modal__footer__marg}></div>
              <div className={styled.modal__footer__container}>
                <div className={styled.modal__footer__container__info}>
                  <div className={styled.modal__footer__container__info__empty}>
                    <span></span>
                    <b>Boş yerlər</b>
                  </div>
                  <div className={styled.modal__footer__container__info__reserv}>
                    <span></span>
                    <b>Məşğul yerlər</b>
                  </div>
                  <div className={styled.modal__footer__container__info__select}>
                    <span></span>
                    <b>Seçilmiş yerlər</b>
                  </div>
                  <div className={styled.modal__footer__container__info__comfort}>
                    <span></span>
                    <b>İkili Comfort yerlər</b>
                  </div>
                </div>
                <div className={styled.modal__footer__container__clr}></div>
                <div className={styled.modal__footer__container__bottom}>
                  <div className={styled.modal__footer__container__bottom__price}>
                    <label>Ümumi məbləğ:</label>
                    <p>
                      <span>{price}</span> AZN
                    </p>
                  </div>
                  <div className={styled.modal__footer__container__bottom__btn}>
                    <a href="#">Tesdiqlemek</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Schedule;
