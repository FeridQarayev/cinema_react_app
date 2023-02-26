import { Modal } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import * as Yup from 'yup';
import type Hall from '../../../interfaces/new.hall';
import styled from './hall.module.scss';

const CreateSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
});

function HallAdmin(): JSX.Element {
  const [cinemas, setCinemas] = useState<Hall[]>([]);
  const [cinema, setCinema] = useState<Hall>();
  const [openCreate, setopenCreate] = useState(false);
  const [openUpdate, setopenUpdate] = useState(false);

  const handleOpenCreate = (): void => {
    setopenCreate((oldopen) => !oldopen);
  };
  const handleOpenUpdate = (): void => {
    setopenUpdate((oldopen) => !oldopen);
  };

  const columns = useMemo<Array<MRT_ColumnDef<Hall>>>(
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
        accessorKey: 'column',
        header: 'Column',
      },
      {
        accessorKey: 'row',
        header: 'Row',
      },
      {
        accessorKey: 'cinema.name',
        header: 'Cinema',
      },
      {
        header: 'Actions',
        align: 'right',
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        Cell: ({ renderedCellValue, row }) => [
          <div key={row.original._id}>
            <button
              onClick={() => {
                openUpdateCinema(row.original._id);
              }}
              className={styled.update}
            >
              Edit
            </button>
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
    <div className={styled.hall}>
      <div className={styled.hall__container}>
        <div className={styled.hall__container__title}>
          <div className={styled.hall__container__title__col}>
            <div>
              <h2>Cinemas</h2>
            </div>
          </div>
        </div>
        <div className={styled.hall__container__body}>
          <MaterialReactTable
            columns={columns}
            data={cinemas}
            renderTopToolbarCustomActions={() => (
              <button onClick={handleOpenCreate} className={styled.new}>
                Create New Cinema
              </button>
            )}
          />
        </div>
        <Modal open={openUpdate} onClose={handleOpenUpdate} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <div className={styled.model__create}>
            <h2 id="modal-modal-title">Update Cinema</h2>
            <div className={styled.model__create__form}>
              <Formik
                initialValues={{
                  cinemaId: cinema?._id !== undefined ? cinema?._id : '',
                  name: cinema?.name !== undefined ? cinema?.name : '',
                }}
                validationSchema={CreateSchema}
                onSubmit={(values, { resetForm }) => {
                  void cinemaUpdate(values)
                    .then((res) => {
                      if (res.status === 201) {
                        setCinema(res.data.data);
                        setCinemas((datas) => {
                          const uptaded = datas.find((data) => data._id === values.cinemaId);
                          uptaded?.name !== undefined && (uptaded.name = values.name);
                          return [...datas];
                        });
                        toast.success(res.data.message);
                        handleOpenUpdate();
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
                      <button type="submit">Update</button>
                      <button type="button" onClick={handleOpenUpdate}>
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
      <Toaster position="top-center" reverseOrder={false} />

      <Modal open={openCreate} onClose={handleOpenCreate} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
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
                      handleOpenCreate();
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
                    <button type="button" onClick={handleOpenCreate}>
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

export default HallAdmin;
