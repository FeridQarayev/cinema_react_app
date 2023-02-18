import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useRef, useMemo } from 'react';
import backimg from '../../../images/schedule/bg.jpg';
import topRight from '../../../images/schedule/bobine.png';
import bottomLeft from '../../../images/schedule/bottom-left.png';
import bottomRight from '../../../images/schedule/bottom-right.png';
import middleDown from '../../../images/schedule/glasses-1.png';
import topLeft from '../../../images/schedule/top-left.png';
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
function Schedule(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const divTags = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    container.current?.addEventListener('mousemove', (e) => {
      divTags.current.forEach(
        (divTag) => (divTag.style.transform = String(`perspective(600px) translate3d(${-e.clientX / 100}px, ${-e.clientY / 100}px, 0px)`))
      );
    });
  }, []);
  console.log(data);
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
        accessorFn: (row) => row.formats,
        id: 'formats',
        header: 'Formats',
      },
      {
        accessorFn: (row) => row.languages,
        id: 'languages',
        header: 'Languages',
      },
    ],
    []
  );
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
      <MaterialReactTable columns={columns} data={data} />;
    </div>
  );
}

export default Schedule;
