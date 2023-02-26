import { Modal } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import * as Yup from 'yup';
import type Movie from '../../../interfaces/movie';
import { movieGetAll, movieGetById, movieCreate, movieUpdate, movieDelete } from '../../../services/movie';
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

  useEffect(() => {
    void movieGetAll().then((res) => {
      if (res.status === 200) setMovies(res.data);
    });
  }, []);

  const deleteMovie = (id: string): void => {
    const alert = confirm('Are you sure you want to delete hall?');
    if (alert)
      void movieDelete(id)
        .then((res) => {
          if (res.status === 200) {
            setMovies((datas) => datas.filter((data) => data._id !== id));
            toast.success(res.data.message);
          } else toast.error(res.data.message);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
  };

  const openUpdateMovie = (id: string): void => {
    void movieGetById(id)
      .then((res) => {
        if (res.status === 200) {
          setMovie(res.data.data);
          toast.success(res.data.message);
          handleOpenUpdate();
        } else toast.error(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const columns = useMemo<Array<MRT_ColumnDef<Movie>>>(
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
        accessorKey: 'actor',
        header: 'Actor',
      },
      {
        accessorKey: 'director',
        header: 'Director',
      },
      {
        accessorKey: 'duration',
        header: 'Duration',
      },
      {
        header: 'Actions',
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
                openUpdateMovie(row.original._id);
              }}
              className={styled.update}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteMovie(row.original._id);
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
    <div className={styled.movie}>
      <div className={styled.movie__container}>
        <div className={styled.movie__container__title}>
          <div className={styled.movie__container__title__col}>
            <div>
              <h2>Movies</h2>
            </div>
          </div>
        </div>
        <div className={styled.movie__container__body}>
          <MaterialReactTable
            columns={columns}
            data={movies}
            renderTopToolbarCustomActions={() => (
              <button onClick={handleOpenCreate} className={styled.new}>
                Create New Movie
              </button>
            )}
          />
        </div>
        <Modal open={openUpdate} onClose={handleOpenUpdate} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <div className={styled.model__create}>
            <h2 id="modal-modal-title">Update Movie</h2>
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
                  void movieUpdate(values)
                    .then((res) => {
                      if (res.status === 201) {
                        setMovie(res.data.data);
                        setMovies((datas) => {
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
          <h2 id="modal-modal-title">Create New Movie</h2>
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
                void movieCreate(values)
                  .then((res) => {
                    if (res.status === 201) {
                      toast.success(res.data.message);
                      setMovies((datas) => [...datas, res.data.data]);
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
