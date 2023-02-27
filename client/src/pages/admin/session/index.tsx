import { Modal } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import * as Yup from 'yup';
import type Movie from '../../../interfaces/movie';
import type Hall from '../../../interfaces/new.hall';
import type Session from '../../../interfaces/session';
import { hallGetAll } from '../../../services/hall';
import { movieGetAll } from '../../../services/movie';
import { sessionGetAll, sessionGetById, sessionCreate, sessionUpdate, sessionDelete } from '../../../services/session';
import styled from './session.module.scss';

const CreateSchema = Yup.object().shape({
  language: Yup.string().min(1, 'Too Short!').max(2, 'Too Long!').required('Required!'),
  date: Yup.string().required('Required!'),
  price: Yup.number().min(0).max(1000).required('Required!'),
  formats: Yup.object()
    .shape({
      d2: Yup.bool(),
      d3: Yup.bool(),
      d4: Yup.bool(),
    })
    .required('Required!'),
});

function SessionAdmin(): JSX.Element {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [halls, setHalls] = useState<Hall[]>([]);
  const [session, setSession] = useState<Session>();
  const [openCreate, setopenCreate] = useState(false);
  const [openUpdate, setopenUpdate] = useState(false);

  const handleOpenCreate = (): void => {
    setopenCreate((oldopen) => !oldopen);
  };
  const handleOpenUpdate = (): void => {
    setopenUpdate((oldopen) => !oldopen);
  };

  useEffect(() => {
    void sessionGetAll().then((res) => {
      if (res.status === 200) setSessions(res.data);
    });
    void movieGetAll().then((res) => {
      if (res.status === 200) setMovies(res.data);
    });
    void hallGetAll().then((res) => {
      if (res.status === 200) setHalls(res.data);
    });
  }, []);

  const deleteHall = (id: string): void => {
    const alert = confirm('Are you sure you want to delete hall?');
    if (alert)
      void sessionDelete(id)
        .then((res) => {
          if (res.status === 200) {
            setSessions((datas) => datas.filter((data) => data._id !== id));
            toast.success(res.data.message);
          } else toast.error(res.data.message);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
  };

  const openUpdateHall = (id: string): void => {
    void sessionGetById(id)
      .then((res) => {
        if (res.status === 200) {
          setSession(res.data.data);
          toast.success(res.data.message);
          handleOpenUpdate();
        } else toast.error(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const columns = useMemo<Array<MRT_ColumnDef<Session>>>(
    () => [
      {
        accessorKey: '_id',
        header: 'Id',
      },
      {
        accessorKey: 'movie.name',
        header: 'Movie',
      },
      {
        accessorKey: 'hall.cinema.name',
        header: 'Cinema',
      },
      {
        accessorKey: 'hall.name',
        header: 'Hall',
      },
      {
        accessorKey: 'date',
        header: 'Date',
      },
      {
        accessorKey: 'language',
        header: 'Language',
      },
      {
        header: 'Price',
        Cell: ({ renderedCellValue, row }) => [<span key={row.original._id}>{row.original.price} AZN</span>],
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
                openUpdateHall(row.original._id);
              }}
              className={styled.update}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteHall(row.original._id);
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
    <div className={styled.session}>
      <div className={styled.session__container}>
        <div className={styled.session__container__title}>
          <div className={styled.session__container__title__col}>
            <div>
              <h2>Sessions</h2>
            </div>
          </div>
        </div>
        <div className={styled.session__container__body}>
          <MaterialReactTable
            columns={columns}
            data={sessions}
            renderTopToolbarCustomActions={() => (
              <button onClick={handleOpenCreate} className={styled.new}>
                Create New Session
              </button>
            )}
          />
        </div>
        <Modal open={openUpdate} onClose={handleOpenUpdate} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <div className={styled.model__create}>
            <h2 id="modal-modal-title">Update Session</h2>
            <div className={styled.model__create__form}>
              <Formik
                initialValues={{
                  sessionId: session?._id !== undefined ? session?._id : '',
                  date: session?.date !== undefined ? session?.date : '',
                  price: session?.price !== undefined ? session?.price : '',
                  language: session?.language !== undefined ? session?.language : '',
                  formats: {
                    d2: session?.formats?.d2 ?? false ? session?.formats.d2 : false,
                    d3: session?.formats?.d3 ?? false ? session?.formats.d3 : false,
                    d4: session?.formats?.d4 ?? false ? session?.formats.d4 : false,
                  },
                }}
                validationSchema={CreateSchema}
                onSubmit={(values, { resetForm }) => {
                  void sessionUpdate(values)
                    .then((res) => {
                      if (res.status === 201) {
                        setSession(res.data.data);
                        setSessions((datas) => {
                          const uptaded = datas.find((data) => data._id === values.sessionId);
                          uptaded?.date !== undefined && (uptaded.date = values.date);
                          uptaded?.price !== undefined && (uptaded.price = Number(values.price));
                          uptaded?.language !== undefined && (uptaded.language = values.language);
                          if (uptaded !== undefined) {
                            uptaded.formats.d2 = values.formats.d2 !== undefined ? values.formats.d2 : false;
                            uptaded.formats.d3 = values.formats.d3 !== undefined ? values.formats.d3 : false;
                            uptaded.formats.d4 = values.formats.d4 !== undefined ? values.formats.d4 : false;
                          }
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
                      <Field name="date" placeholder="Time" type="time" />
                      {errors.date != null && (touched.date ?? false) ? <span>{errors.date}</span> : null}
                    </div>
                    <div className={styled.model__create__form__group}>
                      <Field name="price" placeholder="Price" type="number" />
                      {errors.price != null && (touched.price ?? false) ? <span>{errors.price}</span> : null}
                    </div>
                    <nav>
                      <div className={styled.model__create__form__group}>
                        <div className={styled.model__create__form__group__check}>
                          <label htmlFor="language">AZ</label>
                          <Field name="language" type="radio" value="AZ" />
                          {errors.language != null && (touched.language ?? false) ? <span>{errors.language}</span> : null}
                        </div>
                      </div>
                      <div className={styled.model__create__form__group}>
                        <div className={styled.model__create__form__group__check}>
                          <label htmlFor="language">TU</label>
                          <Field name="language" type="radio" value="TU" />
                          {errors.language != null && (touched.language ?? false) ? <span>{errors.language}</span> : null}
                        </div>
                      </div>
                      <div className={styled.model__create__form__group}>
                        <div className={styled.model__create__form__group__check}>
                          <label htmlFor="language">RU</label>
                          <Field name="language" type="radio" value="RU" />
                          {errors.language != null && (touched.language ?? false) ? <span>{errors.language}</span> : null}
                        </div>
                      </div>
                      <div className={styled.model__create__form__group}>
                        <div className={styled.model__create__form__group__check}>
                          <label htmlFor="language">EN</label>
                          <Field name="language" type="radio" value="EN" />
                          {errors.language != null && (touched.language ?? false) ? <span>{errors.language}</span> : null}
                        </div>
                      </div>
                    </nav>
                    <nav>
                      <div className={styled.model__create__form__group}>
                        <div className={styled.model__create__form__group__check}>
                          <label htmlFor="formats.d2">2D</label>
                          <Field name="formats.d2" type="checkbox" />
                          {errors.formats?.d2 != null && (touched.formats?.d2 ?? false) ? <span>{errors.formats?.d2}</span> : null}
                        </div>
                      </div>
                      <div className={styled.model__create__form__group}>
                        <div className={styled.model__create__form__group__check}>
                          <label htmlFor="formats.d3">3D</label>
                          <Field name="formats.d3" type="checkbox" />
                          {errors.formats?.d3 != null && (touched.formats?.d3 ?? false) ? <span>{errors.formats?.d3}</span> : null}
                        </div>
                      </div>
                      <div className={styled.model__create__form__group}>
                        <div className={styled.model__create__form__group__check}>
                          <label htmlFor="formats.d4">4D</label>
                          <Field name="formats.d4" type="checkbox" />
                          {errors.formats?.d4 != null && (touched.formats?.d4 ?? false) ? <span>{errors.formats?.d4}</span> : null}
                        </div>
                      </div>
                    </nav>
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
          <h2 id="modal-modal-title">Create New Session</h2>
          <div className={styled.model__create__form}>
            <Formik
              initialValues={{
                movieId: '',
                hallId: '',
                date: '',
                price: '',
                language: '',
                formats: {
                  d2: false,
                  d3: false,
                  d4: false,
                },
              }}
              validationSchema={CreateSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                void sessionCreate(values)
                  .then((res) => {
                    if (res.status === 201) {
                      toast.success(res.data.message);
                      setSessions((datas) => [...datas, res.data.data]);
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
                    <Field name="date" placeholder="Name" type="time" />
                    {errors.date != null && (touched.date ?? false) ? <span>{errors.date}</span> : null}
                  </div>
                  <div className={styled.model__create__form__group}>
                    <Field name="movieId" as="select" placeholder="Movie">
                      <option hidden value="DEFAULT">
                        Movies
                      </option>
                      {movies.map((movie) => (
                        <option key={movie._id} value={movie._id}>
                          {movie.name}
                        </option>
                      ))}
                    </Field>
                    {errors.movieId != null && (touched.movieId ?? false) ? <span>{errors.movieId}</span> : null}
                  </div>
                  <div className={styled.model__create__form__group}>
                    <Field name="hallId" as="select" placeholder="Hall">
                      <option hidden value="DEFAULT">
                        Halls
                      </option>
                      {halls.map((hall) => (
                        <option key={hall._id} value={hall._id}>
                          {hall.name}
                        </option>
                      ))}
                    </Field>
                    {errors.hallId != null && (touched.hallId ?? false) ? <span>{errors.hallId}</span> : null}
                  </div>
                  <div className={styled.model__create__form__group}>
                    <Field name="price" placeholder="Price" type="number" />
                    {errors.price != null && (touched.price ?? false) ? <span>{errors.price}</span> : null}
                  </div>
                  <nav>
                    <div className={styled.model__create__form__group}>
                      <div className={styled.model__create__form__group__check}>
                        <label htmlFor="language">AZ</label>
                        <Field name="language" type="radio" value="AZ" />
                        {errors.language != null && (touched.language ?? false) ? <span>{errors.language}</span> : null}
                      </div>
                    </div>
                    <div className={styled.model__create__form__group}>
                      <div className={styled.model__create__form__group__check}>
                        <label htmlFor="language">TU</label>
                        <Field name="language" type="radio" value="TU" />
                        {errors.language != null && (touched.language ?? false) ? <span>{errors.language}</span> : null}
                      </div>
                    </div>
                    <div className={styled.model__create__form__group}>
                      <div className={styled.model__create__form__group__check}>
                        <label htmlFor="language">RU</label>
                        <Field name="language" type="radio" value="RU" />
                        {errors.language != null && (touched.language ?? false) ? <span>{errors.language}</span> : null}
                      </div>
                    </div>
                    <div className={styled.model__create__form__group}>
                      <div className={styled.model__create__form__group__check}>
                        <label htmlFor="language">EN</label>
                        <Field name="language" type="radio" value="EN" />
                        {errors.language != null && (touched.language ?? false) ? <span>{errors.language}</span> : null}
                      </div>
                    </div>
                  </nav>
                  <nav>
                    <div className={styled.model__create__form__group}>
                      <div className={styled.model__create__form__group__check}>
                        <label htmlFor="formats.d2">2D</label>
                        <Field name="formats.d2" type="checkbox" />
                        {errors.formats?.d2 != null && (touched.formats?.d2 ?? false) ? <span>{errors.formats?.d2}</span> : null}
                      </div>
                    </div>
                    <div className={styled.model__create__form__group}>
                      <div className={styled.model__create__form__group__check}>
                        <label htmlFor="formats.d3">3D</label>
                        <Field name="formats.d3" type="checkbox" />
                        {errors.formats?.d3 != null && (touched.formats?.d3 ?? false) ? <span>{errors.formats?.d3}</span> : null}
                      </div>
                    </div>
                    <div className={styled.model__create__form__group}>
                      <div className={styled.model__create__form__group__check}>
                        <label htmlFor="formats.d4">4D</label>
                        <Field name="formats.d4" type="checkbox" />
                        {errors.formats?.d4 != null && (touched.formats?.d4 ?? false) ? <span>{errors.formats?.d4}</span> : null}
                      </div>
                    </div>
                  </nav>
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

export default SessionAdmin;
