import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type Cinema from '../../../interfaces/new.cinema';
import { cinemaGetAll } from '../../../services/cinema.getall';
import styled from './cinema.module.scss';

function CinemaAdmin(): JSX.Element {
  const [cinemas, setCinemas] = useState<Cinema[]>([]);

  useEffect(() => {
    void cinemaGetAll().then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        setCinemas(res.data);
      }
    });
  }, []);
  const deleteCinema = (id: string): void => {
    console.log(id);
  };

  const columns = useMemo<Array<MRT_ColumnDef<Cinema>>>(
    () => [
      {
        accessorFn: (row) => row._id,
        header: 'Id',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'halls',
        header: 'Halls',
        Cell: ({ renderedCellValue, row }) => [row.original.halls.map((hall, index) => <span key={index}>{hall.name}, </span>)],
      },
      {
        accessorKey: '_id',
        header: 'Actions',
        align: 'right',
        style: { color: 'red' },
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        Cell: ({ renderedCellValue, row }) => [
          <>
            <Link to={`update/${row.original._id}`} className={styled.update}>
              Edit
            </Link>
            <button
              onClick={() => {
                deleteCinema(row.original._id);
              }}
              className={styled.delete}
            >
              Delete
            </button>
          </>,
        ],
      },
    ],
    []
  );
  return (
    <div className={styled.cinema}>
      <div className={styled.cinema__container}>
        <div className={styled.cinema__container__title}>
          <div className={styled.cinema__container__title__col}>
            <div>
              <h2>Cinemas</h2>
            </div>
          </div>
        </div>
        <div className={styled.cinema__container__body}>
          <MaterialReactTable
            columns={columns}
            data={cinemas}
            renderTopToolbarCustomActions={() => (
              <Link to={'/create'} className={styled.new}>
                Create New Cinema
              </Link>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default CinemaAdmin;
