import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import type Cinema from '../../../interfaces/new.cinema';
import { cinemaDelete } from '../../../services/cinema.delete';
import { cinemaGetAll } from '../../../services/cinema.getall';
import styled from './cinema.module.scss';

function CinemaAdmin(): JSX.Element {
  const [cinemas, setCinemas] = useState<Cinema[]>([]);

  useEffect(() => {
    void cinemaGetAll().then((res) => {
      if (res.status === 200) setCinemas(res.data);
    });
  }, []);
  const deleteCinema = (id: string): void => {
    const alert = confirm('Are you sure you want to delete cinema?');
    if (alert)
      void cinemaDelete(id)
        .then((res) => {
          if (res.status === 200) {
            setCinemas((datas) => datas.filter((data) => data._id !== id));
            toast.success(res.data.message);
          } else toast.error(res.data.message);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
  };

  const columns = useMemo<Array<MRT_ColumnDef<Cinema>>>(
    () => [
      {
        accessorKey: '_id',
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
          <div key={row.original._id}>
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
          </div>,
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CinemaAdmin;
