import { Modal } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import * as Yup from 'yup';
import type Movie from '../../../interfaces/movie';
import styled from './movie.module.scss';

const CreateSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required!'),
  column: Yup.number().min(5).max(15).required('Required!'),
  row: Yup.number().min(5).max(15).required('Required!'),
  cinemaId: Yup.string().required('Required!'),
});

const UpdateSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required!'),
  column: Yup.number().min(5).max(15).required('Required!'),
  row: Yup.number().min(5).max(15).required('Required!'),
});

function MovieAdmin(): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const [openCreate, setopenCreate] = useState(false);
  const [openUpdate, setopenUpdate] = useState(false);

  const handleOpenCreate = (): void => {
    setopenCreate((oldopen) => !oldopen);
  };
  const handleOpenUpdate = (): void => {
    setopenUpdate((oldopen) => !oldopen);
  };
  return (
    <div className={styled.movie}>
      <div className={styled.movie__container}>
        <div className={styled.movie__container__title}>
          <div className={styled.movie__container__title__col}>
            <div>
              <h2>Halls</h2>
            </div>
          </div>
        </div>
        <div className={styled.movie__container__body}>
          <MaterialReactTable
            columns={columns}
            data={halls}
            renderTopToolbarCustomActions={() => (
              <button onClick={handleOpenCreate} className={styled.new}>
                Create New Hall
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
                  hallId: hall?._id !== undefined ? hall?._id : '',
                  name: hall?.name !== undefined ? hall?.name : '',
                  column: hall?.column !== undefined ? hall?.column : '',
                  row: hall?.row !== undefined ? hall?.row : '',
                }}
                validationSchema={UpdateSchema}
                onSubmit={(values, { resetForm }) => {
                  void hallUpdate(values)
                    .then((res) => {
                      if (res.status === 201) {
                        setHall(res.data.data);
                        setHalls((datas) => {
                          const uptaded = datas.find((data) => data._id === values.hallId);
                          uptaded?.name !== undefined && (uptaded.name = values.name);
                          uptaded?.column !== undefined && (uptaded.column = Number(values.column));
                          uptaded?.row !== undefined && (uptaded.row = Number(values.row));
                          return [...datas];
                        });
                        toast.success(res.data.message);
                        handleOpenUpdate();
                        resetForm();
                      } else toast.error(res.data.message);
                    })
                    .catch((error) => {
                      toast.error(error.response.data.message);
                    });
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className={styled.model__create__form__group}>
                      <Field name="name" placeholder="Name" />
                      {errors.name != null && (touched.name ?? false) ? <span>{errors.name}</span> : null}
                    </div>
                    <div className={styled.model__create__form__group}>
                      <Field name="column" placeholder="Column" />
                      {errors.column != null && (touched.column ?? false) ? <span>{errors.column}</span> : null}
                    </div>
                    <div className={styled.model__create__form__group}>
                      <Field name="row" placeholder="Row" />
                      {errors.row != null && (touched.row ?? false) ? <span>{errors.row}</span> : null}
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
                column: '',
                row: '',
                cinemaId: '',
              }}
              validationSchema={CreateSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                void hallCreate(values)
                  .then((res) => {
                    if (res.status === 201) {
                      toast.success(res.data.message);
                      setHalls((datas) => [...datas, res.data.data]);
                      handleOpenCreate();
                      resetForm();
                    } else toast.error(res.data.message);
                  })
                  .catch((error) => {
                    toast.error(error.response.data.message);
                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className={styled.model__create__form__group}>
                    <Field name="name" placeholder="Name" />
                    {errors.name != null && (touched.name ?? false) ? <span>{errors.name}</span> : null}
                  </div>
                  <div className={styled.model__create__form__group}>
                    <Field name="column" placeholder="Column" />
                    {errors.column != null && (touched.column ?? false) ? <span>{errors.column}</span> : null}
                  </div>
                  <div className={styled.model__create__form__group}>
                    <Field name="row" placeholder="Row" />
                    {errors.row != null && (touched.row ?? false) ? <span>{errors.row}</span> : null}
                  </div>
                  <div className={styled.model__create__form__group}>
                    <Field name="cinemaId" as="select" placeholder="Cinema">
                      <option hidden value="DEFAULT">
                        Cinema
                      </option>
                      {cinemas.map((cinema) => (
                        <option key={cinema._id} value={cinema._id}>
                          {cinema.name}
                        </option>
                      ))}
                    </Field>
                    {errors.cinemaId != null && (touched.cinemaId ?? false) ? <span>{errors.cinemaId}</span> : null}
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

export default MovieAdmin;
