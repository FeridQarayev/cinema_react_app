import { Box, Modal, Typography } from '@mui/material';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useRef, useMemo, useState } from 'react';
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Schedule(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const divTags = useRef<HTMLDivElement[]>([]);
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
        Cell: ({ cell }) => (
          <Box
            component="div"
            onClick={handleOpen}
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

  const [open, setOpen] = useState(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Schedule;
