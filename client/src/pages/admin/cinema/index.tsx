import { Modal } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import type Cinema from '../../../interfaces/new.cinema';
import { cinemaCreate } from '../../../services/cinema.create';
import { cinemaDelete } from '../../../services/cinema.delete';
import { cinemaGetAll } from '../../../services/cinema.getall';
import styled from './cinema.module.scss';

const CreateSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
});

function CinemaAdmin(): JSX.Element {
  const [cinemas, setCinemas] = useState<Cinema[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

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
              <button onClick={handleOpen} className={styled.new}>
                Create New Cinema
              </button>
            )}
          />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className={styled.model__create}>
          <h2 id="modal-modal-title">Create New Cinema</h2>
          <div className={styled.model__create__form}>
            <Formik
              initialValues={{
                name: '',
              }}
              validationSchema={CreateSchema}
              onSubmit={(values, { resetForm }) => {
                void cinemaCreate(values)
                  .then((res) => {
                    if (res.status === 201) {
                      toast.success(res.data.message);
                      setCinemas((datas) => [...datas, res.data.data]);
                      handleClose();
                    } else toast.error(res.data.message);
                  })
                  .catch((error) => {
                    toast.error(error.response.data.message);
                  });
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className={styled.model__create__form__group}>
                    <Field name="name" placeholder="Name" />
                    {errors.name != null && (touched.name ?? false) ? <span>{errors.name}</span> : null}
                  </div>
                  <div className={styled.model__create__form__btn}>
                    <button type="submit">Create</button>
                    <button type="button" onClick={handleClose}>
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CinemaAdmin;
