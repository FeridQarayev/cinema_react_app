import { Box, FormControl, InputLabel, MenuItem, Modal } from '@mui/material';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
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
import type Cinema from '../../../interfaces/cinema';
import type DropLanguages from '../../../interfaces/droplanguages';
import type Hall from '../../../interfaces/hall';
import type MovieList from '../../../interfaces/movielist';
import placeSvg from '../../../svgs/places_icon.svg';
import styled from './schedule.module.scss';

const data: MovieList[] = [
  {
    id: 1,
    name: 'John',
    sessions: new Date().toLocaleTimeString(),
    sessionsDay: new Date().toLocaleDateString(),
    cinema: {
      id: 1,
      name: '28 Mall',
    },
    hall: 'Hall 1',
    formats: {
      d2: true,
      d3: true,
      d4: true,
    },
    languages: {
      az: false,
      tu: true,
      ru: true,
      en: false,
    },
    price: 12,
    places: 1,
  },
  {
    id: 2,
    name: 'Ant-Man and the Wasp: Quantumania',
    sessions: new Date().toLocaleTimeString(),
    sessionsDay: getDateByDay(1).toLocaleDateString(),
    cinema: {
      id: 2,
      name: 'Deniz Mall',
    },
    hall: 'Hall 2',
    formats: {
      d2: true,
      d3: false,
      d4: true,
    },
    languages: {
      az: false,
      tu: true,
      ru: false,
      en: true,
    },
    price: 18,
    places: 2,
  },
  {
    id: 3,
    name: 'Plane',
    sessions: new Date().toLocaleTimeString(),
    sessionsDay: getDateByDay(-2).toLocaleDateString(),
    cinema: {
      id: 3,
      name: 'Amburan Mall',
    },
    hall: 'Hall 4',
    formats: {
      d2: true,
      d3: true,
      d4: false,
    },
    languages: {
      az: true,
      tu: true,
      ru: false,
      en: false,
    },
    price: 7,
    places: 3,
  },
  {
    id: 4,
    name: 'Kino',
    sessions: new Date().toLocaleTimeString(),
    sessionsDay: getDateByDay(3).toLocaleDateString(),
    cinema: {
      id: 2,
      name: 'Deniz Mall',
    },
    hall: 'Hall 4',
    formats: {
      d2: true,
      d3: true,
      d4: false,
    },
    languages: {
      az: true,
      tu: true,
      ru: false,
      en: false,
    },
    price: 7,
    places: 3,
  },
  {
    id: 5,
    name: 'Film',
    sessions: new Date().toLocaleTimeString(),
    sessionsDay: getDateByDay(0).toLocaleDateString(),
    cinema: {
      id: 3,
      name: 'Amburan Mall',
    },
    hall: 'Hall 4',
    formats: {
      d2: true,
      d3: false,
      d4: false,
    },
    languages: {
      az: false,
      tu: false,
      ru: false,
      en: true,
    },
    price: 7,
    places: 3,
  },
  {
    id: 6,
    name: 'Movie',
    sessions: new Date().toLocaleTimeString(),
    sessionsDay: getDateByDay(0).toLocaleDateString(),
    cinema: {
      id: 3,
      name: 'Amburan Mall',
    },
    hall: 'Hall 4',
    formats: {
      d2: true,
      d3: true,
      d4: false,
    },
    languages: {
      az: true,
      tu: false,
      ru: false,
      en: false,
    },
    price: 7,
    places: 3,
  },
  {
    id: 7,
    name: 'Kink Kong',
    sessions: new Date().toLocaleTimeString(),
    sessionsDay: new Date().toLocaleDateString(),
    cinema: {
      id: 4,
      name: 'Nakhcivan',
    },
    hall: 'Hall 8',
    formats: {
      d2: false,
      d3: false,
      d4: true,
    },
    languages: {
      az: false,
      tu: true,
      ru: true,
      en: false,
    },
    price: 8,
    places: 1,
  },
];

const bordereds: Hall = {
  column: 10,
  row: 8,
  price: 0,
  reserved: [
    {
      reservedCol: 2,
      reservedRow: 3,
    },
    {
      reservedCol: 1,
      reservedRow: 3,
    },
    {
      reservedCol: 2,
      reservedRow: 4,
    },
  ],
};
const borderedss: Hall = {
  column: 5,
  row: 3,
  price: 0,
  reserved: [
    {
      reservedCol: 1,
      reservedRow: 3,
    },
  ],
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
  maxWidth: '1000px',
  width: '70%',
  height: '761px',
  verticalAlign: 'middle',
  overflow: 'auto',
  borderRadius: '15px 15px 15px 15px',
  fontFamily: 'Roboto',
  '&:focus-visible': {
    outline: 'none',
  },
};

function getDateByDay(day: number): Date {
  return new Date(new Date().setDate(new Date().getDate() + day));
}

const dropDays = [
  new Date().toLocaleDateString(),
  getDateByDay(1).toLocaleDateString(),
  getDateByDay(2).toLocaleDateString(),
  getDateByDay(3).toLocaleDateString(),
];
const dropCinemas: Cinema[] = [
  {
    id: 0,
    name: 'Cinema',
  },
  {
    id: 1,
    name: '28 Mall',
  },
  {
    id: 2,
    name: 'Deniz Mall',
  },
  {
    id: 3,
    name: 'Amburan Mall',
  },
  {
    id: 4,
    name: 'Nakhcivan',
  },
  {
    id: 5,
    name: 'Metro Prak',
  },
];

const dropLanguages: DropLanguages[] = [
  { id: '0', name: 'Language' },
  { id: 'az', name: 'Azerbaijan' },
  { id: 'tu', name: 'Turkish' },
  { id: 'ru', name: 'Russian' },
  { id: 'en', name: 'English' },
];
function Schedule(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const buyBtn = useRef<HTMLDivElement>(null);
  const divTags = useRef<HTMLDivElement[]>([]);
  const [arr, setArr] = useState<Hall>({ column: 0, row: 0, price: 0, reserved: [{ reservedCol: 0, reservedRow: 0 }] });
  const [price, setPrice] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState<MovieList>();
  const [movies, setMovies] = useState<MovieList[]>(data);
  const [day, setDay] = useState(new Date().toLocaleDateString());
  const [cinema, setCinema] = useState(0);
  const [language, setLanguage] = useState('0');
  const handleChangeDay = (event: SelectChangeEvent): void => {
    setDay(event.target.value);
  };
  const handleChangeCinema = (event: SelectChangeEvent): void => {
    setCinema(Number(event.target.value));
  };
  const handleChangeLanguage = (event: SelectChangeEvent): void => {
    setLanguage(event.target.value);
  };
  const handleOpen = (num: number, movie: MovieList): void => {
    setOpen(true);
    bordereds.price = movie.price;
    borderedss.price = movie.price;
    setPrice(0);
    num === 1 ? setArr(bordereds) : setArr(borderedss);
    setMovie(movie);
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
    setMovies(data);
    setMovies((mov) =>
      mov.filter(
        (row) =>
          row.sessionsDay.includes(day) &&
          (cinema !== 0 ? row.cinema.id === cinema : true) &&
          (language !== '0'
            ? (language.includes('az') && row.languages.az) ||
              (language.includes('tu') && row.languages.tu) ||
              (language.includes('ru') && row.languages.ru) ||
              (language.includes('en') && row.languages.en)
            : true)
      )
    );
    price !== 0 ? buyBtn.current?.classList.add(styled.active) : buyBtn.current?.classList.remove(styled.active);
  }, [price, day, cinema, language]);
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
        accessorFn: (row) => row.cinema.name,
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
          [row.original.formats.d2 && '2D', row.original.formats.d3 && '3D', row.original.formats.d4 && '4D'].map(
            (value, index) =>
              value !== false && (
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
              )
          ),
          [
            row.original.languages.az && 'AZ',
            row.original.languages.tu && 'TU',
            row.original.languages.en && 'EN',
            row.original.languages.ru && 'RU',
          ].map(
            (value, index) =>
              value !== false && (
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
              )
          ),
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
              handleOpen(cell.getValue<number>(), row.original);
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
    place.currentTarget.classList.toggle(styled.modal__body__list__select);
    place.currentTarget.classList.value === styled.modal__body__list__select
      ? setPrice((prc) => placePrice + prc)
      : setPrice((prc) => prc - placePrice);
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
        { key: i, className: styled.modal__body__list__border },
        createElement('b', { style: { top: String(`${toppx}px`) } }, i)
      );
      for (let z = 1; z <= hall.row; z++) {
        const emptyLi: JSX.Element = createElement(
          'li',
          {
            key: ((z + 73) / 9) * ((((i + 4) * 99) / 4) * 3),
            className:
              hall.reserved.find((r) => r.reservedRow === z && r.reservedCol === i)?.reservedCol === undefined
                ? styled.modal__body__list__empty
                : styled.modal__body__list__reserv,
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
        { key: i * 77, className: styled.modal__body__list__border },
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

      <div className={styled.schedule__table}>
        <div className={styled.schedule__table__header}>
          <FormControl
            sx={{
              m: 1,
              minWidth: 80,
              backgroundColor: '#333',
              '.css-rrdfqm-MuiFormLabel-root-MuiInputLabel-root': {
                color: 'white !important',
              },
            }}
          >
            <InputLabel sx={{ color: 'white' }} id="demo-simple-select-autowidth-label">
              Date
            </InputLabel>
            <Select
              sx={{
                color: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'white !important',
                },
              }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={day}
              onChange={handleChangeDay}
              autoWidth
              label="Age"
            >
              {dropDays.map((day, i) => (
                <MenuItem key={i} value={day}>
                  {day === new Date().toLocaleDateString() ? 'Today' : day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              minWidth: 80,
              backgroundColor: '#333',
              '.css-rrdfqm-MuiFormLabel-root-MuiInputLabel-root': {
                color: 'white !important',
              },
            }}
          >
            <InputLabel sx={{ color: 'white' }} id="demo-simple-select-autowidth-label">
              Cinema
            </InputLabel>
            <Select
              sx={{
                color: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'white !important',
                },
              }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={cinema.toString()}
              onChange={handleChangeCinema}
              autoWidth
              label="Cinema"
            >
              {dropCinemas.map((cinema) => (
                <MenuItem key={cinema.id} value={cinema.id}>
                  {cinema.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              minWidth: 80,
              backgroundColor: '#333',
              '.css-rrdfqm-MuiFormLabel-root-MuiInputLabel-root': {
                color: 'white !important',
              },
            }}
          >
            <InputLabel sx={{ color: 'white' }} id="demo-simple-select-autowidth-label">
              Language
            </InputLabel>
            <Select
              sx={{
                color: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(228, 219, 233, 0.25)',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'white !important',
                },
              }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={language}
              onChange={handleChangeLanguage}
              autoWidth
              label="Language"
            >
              {dropLanguages.map((language) => (
                <MenuItem key={language.id} value={language.id}>
                  {language.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={styled.schedule__table__body}>
          <MaterialReactTable columns={columns} data={movies} />
        </div>
      </div>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <div className={styled.modal}>
            {movie?.name}
            <br />
            {movie?.sessionsDay}, {movie?.sessions}
            <br />
            {movie?.cinema.name}, {movie?.hall}
            <div className={styled.up__icon}>
              {movie?.formats.d4 === true && (
                <span className={styled.hover__text}>
                  <span className={styled.hover__text__content}>
                    <b></b>
                    Film 4DX formatinda nümayiş olunur
                  </span>
                  <img src={fourDxImg} alt="4DX" />
                </span>
              )}
              {movie?.formats.d3 === true && (
                <span className={styled.hover__text}>
                  <span className={styled.hover__text__content}>
                    <b></b>
                    Film 3D formatinda nümayiş olunur
                  </span>
                  <img src={d3} alt="3D" />
                </span>
              )}
              {movie?.formats.d2 === true && (
                <span className={styled.hover__text}>
                  <span className={styled.hover__text__content}>
                    <b></b>
                    Film 2D formatinda nümayiş olunur
                  </span>
                  <img src={d2} alt="2d" />
                </span>
              )}
              {movie?.languages.az === true && (
                <span className={styled.hover__text}>
                  <span className={styled.hover__text__content}>
                    <b></b>
                    Film Azərbaycan dilində nümayiş olunur
                  </span>
                  <img src={azImg} alt="AZ" />
                </span>
              )}
              {movie?.languages.tu === true && (
                <span className={styled.hover__text}>
                  <span className={styled.hover__text__content}>
                    <b></b>
                    Film Türk dilində nümayiş olunur
                  </span>
                  <img src={turImg} alt="Tu" />
                </span>
              )}
              {movie?.languages.ru === true && (
                <span className={styled.hover__text}>
                  <span className={styled.hover__text__content}>
                    <b></b>
                    Film Rus dilində nümayiş olunur
                  </span>
                  <img src={ruImg} alt="RU" />
                </span>
              )}
              {movie?.languages.en === true && (
                <span className={styled.hover__text}>
                  <span className={styled.hover__text__content}>
                    <b></b>
                    Film İngilis dilində nümayiş olunur
                  </span>
                  <img src={enImg} alt="EN" />
                </span>
              )}
            </div>
            <div className={styled.modal__body}>
              <ul className={styled.modal__body__list}>{sortedBorder(arr)}</ul>
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
                  <div ref={buyBtn} className={styled.modal__footer__container__bottom__btn}>
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
