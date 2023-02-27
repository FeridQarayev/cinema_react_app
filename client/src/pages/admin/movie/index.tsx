import { Modal } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import type Movie from '../../../interfaces/movie';
import { movieGetAll, movieGetById, movieCreate, movieUpdate, movieDelete } from '../../../services/movie';
import { verifyAdmin } from '../../../services/verify.admin';
import styled from './movie.module.scss';

const CreateSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required!'),
  actor: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required!'),
  director: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required!'),
  duration: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required!'),
  ageLimit: Yup.number().integer().min(0).max(100).required('Required!'),
  sessionTime: Yup.date().required('Required!'),
  sessionTimeOut: Yup.date().required('Required!'),
  genre: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required!'),
  synopsis: Yup.string().min(0, 'Too Short!').max(900, 'Too Long!').required('Required!'),
  rating: Yup.number().min(0).max(10).required('Required!'),
  formats: Yup.object()
    .shape({
      d2: Yup.bool(),
      d3: Yup.bool(),
      d4: Yup.bool(),
    })
    .required('Required!'),
  languages: Yup.object()
    .shape({
      az: Yup.bool().required('Required!'),
      tu: Yup.bool().required('Required!'),
      ru: Yup.bool().required('Required!'),
      en: Yup.bool().required('Required!'),
    })
    .required('Required!'),
  file: Yup.mixed().required('A file is required'),
  // .test('fileFormat', 'Unsupported Format', (value: string) => value.length > 0 && SUPPORTED_FORMATS.includes(value.type)),
  fileCover: Yup.mixed().required('A file is required'),
  // .test('fileFormat', 'Unsupported Format', (value: string) => value.length > 0 && SUPPORTED_FORMATS.includes(value.type)),
});

const UpdateSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required!'),
  actor: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required!'),
  director: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required!'),
  duration: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required!'),
  ageLimit: Yup.number().integer().min(0).max(100).required('Required!'),
  sessionTime: Yup.date().required('Required!'),
  sessionTimeOut: Yup.date().required('Required!'),
  genre: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required!'),
  synopsis: Yup.string().min(0, 'Too Short!').max(900, 'Too Long!').required('Required!'),
  rating: Yup.number().min(0).max(10).required('Required!'),
  formats: Yup.object()
    .shape({
      d2: Yup.bool(),
      d3: Yup.bool(),
      d4: Yup.bool(),
    })
    .required('Required!'),
  languages: Yup.object()
    .shape({
      az: Yup.bool().required('Required!'),
      tu: Yup.bool().required('Required!'),
      ru: Yup.bool().required('Required!'),
      en: Yup.bool().required('Required!'),
    })
    .required('Required!'),
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

  const user = JSON.parse(String(localStorage.getItem('user')));
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== undefined && user !== null) {
      void verifyAdmin(user._id)
        .then((res) => {
          if (res.status !== 200) navigate('../../aboutus');
        })
        .catch(() => {
          navigate('../../aboutus');
        });
    }
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
  console.log(movie);

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
        accessorKey: 'image',
        header: 'Image',
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        Cell: ({ renderedCellValue, row }) => [
          <div key={row.original._id} className={styled.tableimg}>
            <img src={require(`../../../images/movies/${row.original.image}`)} alt="movie" />
          </div>,
        ],
      },
      {
        accessorKey: '_id',
        muiTableHeadCellProps: {
          align: 'left',
        },
        muiTableBodyCellProps: {
          align: 'left',
        },
        header: 'Id',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'ageLimit',
        header: 'Age Limit',
      },
      {
        accessorKey: 'rating',
        header: 'Rating',
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
        <Modal open={openUpdate} onClose={handleOpenUpdate} aria-labelledby="modal-modal-titlee" aria-describedby="modal-modal-descriptionn">
          <div className={styled.modal__create}>
            <h2 id="modal-modal-titlee">Update Movie</h2>
            <div className={styled.modal__create__form}>
              <Formik
                initialValues={{
                  movieId: movie?._id !== undefined ? movie?._id : '',
                  name: movie?.name !== undefined ? movie?.name : '',
                  actor: movie?.actor !== undefined ? movie?.actor : '',
                  director: movie?.director !== undefined ? movie?.director : '',
                  duration: movie?.duration !== null ? movie?.duration : '',
                  ageLimit: movie?.ageLimit !== undefined ? movie?.ageLimit : '',
                  sessionTime: movie?.sessionTime !== null ? movie?.sessionTime : '',
                  sessionTimeOut: movie?.sessionTimeOut !== null ? movie?.sessionTimeOut : '',
                  genre: movie?.genre !== undefined ? movie?.genre : '',
                  synopsis: movie?.synopsis !== undefined ? movie?.synopsis : '',
                  rating: movie?.rating !== undefined ? movie?.rating : '',
                  formats: {
                    d2: movie?.formats?.d2 ?? false ? movie?.formats.d2 : false,
                    d3: movie?.formats?.d3 ?? false ? movie?.formats.d3 : false,
                    d4: movie?.formats?.d4 ?? false ? movie?.formats.d4 : false,
                  },
                  languages: {
                    az: movie?.languages?.az ?? false ? movie?.languages.az : false,
                    tu: movie?.languages?.tu ?? false ? movie?.languages.tu : false,
                    ru: movie?.languages?.ru ?? false ? movie?.languages.ru : false,
                    en: movie?.languages?.en ?? false ? movie?.languages.en : false,
                  },
                }}
                validationSchema={UpdateSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log(values);
                  void movieUpdate(values)
                    .then((res) => {
                      if (res.status === 201) {
                        setMovie(res.data.data);
                        // setMovies((datas) => {
                        //   const uptaded = datas.find((data) => data._id === values.movieId);
                        //   uptaded?.name !== undefined && (uptaded.name = values.name);
                        //   uptaded?.column !== undefined && (uptaded.column = Number(values.column));
                        //   uptaded?.row !== undefined && (uptaded.row = Number(values.row));
                        //   return [...datas];
                        // });
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
                    <article>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="name">Name</label>
                        <Field name="name" placeholder="Name" />
                        {errors.name != null && (touched.name ?? false) ? <span>{errors.name}</span> : null}
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="actor">Actor</label>
                        <Field name="actor" placeholder="Actor" />
                        {errors.actor != null && (touched.actor ?? false) ? <span>{errors.actor}</span> : null}
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="director">Director</label>
                        <Field name="director" placeholder="Director" />
                        {errors.director != null && (touched.director ?? false) ? <span>{errors.director}</span> : null}
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="duration">Duration</label>
                        <Field name="duration" placeholder="Duration" type="time" />
                        {errors.duration != null && (touched.duration ?? false) ? <span>{errors.duration}</span> : null}
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="ageLimit">Age Limit</label>
                        <Field name="ageLimit" type="number" placeholder="Age Limit" />
                        {errors.ageLimit != null && (touched.ageLimit ?? false) ? <span>{errors.ageLimit}</span> : null}
                      </div>
                    </article>
                    <article>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="sessionTime">Session Time</label>
                        <Field name="sessionTime" placeholder="Session Time" type="date" />
                        {errors.sessionTime != null && (touched.sessionTime ?? false) ? <span>{errors.sessionTime}</span> : null}
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="sessionTimeOut">Session Time Out</label>
                        <Field name="sessionTimeOut" placeholder="Session Time Out" type="date" />
                        {errors.sessionTimeOut != null && (touched.sessionTimeOut ?? false) ? <span>{errors.sessionTimeOut}</span> : null}
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="genre">Genre</label>
                        <Field name="genre" placeholder="Genre" />
                        {errors.genre != null && (touched.genre ?? false) ? <span>{errors.genre}</span> : null}
                      </div>
                      <nav>
                        <div className={styled.modal__create__form__group}>
                          <div className={styled.modal__create__form__group__check}>
                            <label htmlFor="formats.d2">2D</label>
                            <Field name="formats.d2" type="checkbox" />
                            {errors.formats?.d2 != null && (touched.formats?.d2 ?? false) ? <span>{errors.formats?.d2}</span> : null}
                          </div>
                        </div>
                        <div className={styled.modal__create__form__group}>
                          <div className={styled.modal__create__form__group__check}>
                            <label htmlFor="formats.d3">3D</label>
                            <Field name="formats.d3" type="checkbox" />
                            {errors.formats?.d3 != null && (touched.formats?.d3 ?? false) ? <span>{errors.formats?.d3}</span> : null}
                          </div>
                        </div>
                        <div className={styled.modal__create__form__group}>
                          <div className={styled.modal__create__form__group__check}>
                            <label htmlFor="formats.d4">4D</label>
                            <Field name="formats.d4" type="checkbox" />
                            {errors.formats?.d4 != null && (touched.formats?.d4 ?? false) ? <span>{errors.formats?.d4}</span> : null}
                          </div>
                        </div>
                      </nav>
                    </article>
                    <article>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="synopsis">Synopsis</label>
                        <Field name="synopsis" placeholder="Synopsis" />
                        {errors.synopsis != null && (touched.synopsis ?? false) ? <span>{errors.synopsis}</span> : null}
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <label htmlFor="rating">Rating</label>
                        <Field name="rating" type="number" placeholder="Rating" />
                        {errors.rating != null && (touched.rating ?? false) ? <span>{errors.rating}</span> : null}
                      </div>
                      <nav>
                        <div className={styled.modal__create__form__group}>
                          <div className={styled.modal__create__form__group__check}>
                            <label htmlFor="languages.az">AZ</label>
                            <Field name="languages.az" type="checkbox" />
                            {errors.languages?.az != null && (touched.languages?.az ?? false) ? <span>{errors.languages?.az}</span> : null}
                          </div>
                        </div>
                        <div className={styled.modal__create__form__group}>
                          <div className={styled.modal__create__form__group__check}>
                            <label htmlFor="languages.tu">TU</label>
                            <Field name="languages.tu" type="checkbox" />
                            {errors.languages?.tu != null && (touched.languages?.tu ?? false) ? <span>{errors.languages?.tu}</span> : null}
                          </div>
                        </div>
                        <div className={styled.modal__create__form__group}>
                          <div className={styled.modal__create__form__group__check}>
                            <label htmlFor="languages.ru">RU</label>
                            <Field name="languages.ru" type="checkbox" />
                            {errors.languages?.ru != null && (touched.languages?.ru ?? false) ? <span>{errors.languages?.ru}</span> : null}
                          </div>
                        </div>
                        <div className={styled.modal__create__form__group}>
                          <div className={styled.modal__create__form__group__check}>
                            <label htmlFor="languages.en">EN</label>
                            <Field name="languages.en" type="checkbox" />
                            {errors.languages?.en != null && (touched.languages?.en ?? false) ? <span>{errors.languages?.en}</span> : null}
                          </div>
                        </div>
                      </nav>
                    </article>
                    <div className={styled.modal__create__form__btn}>
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
        <div className={styled.modal__create}>
          <h2 id="modal-modal-title">Create New Movie</h2>
          <div className={styled.modal__create__form}>
            <Formik
              initialValues={{
                name: '',
                actor: '',
                director: '',
                duration: '',
                ageLimit: '',
                sessionTime: '',
                sessionTimeOut: '',
                genre: '',
                synopsis: '',
                rating: '',
                formats: {
                  d2: false,
                  d3: false,
                  d4: false,
                },
                languages: {
                  az: false,
                  tu: false,
                  ru: false,
                  en: false,
                },
                file: '',
                fileCover: '',
                // name: null,
                // lastModified: '',
                // lastModifiedDate: '',
                // type: '',
                // size: '',
                // webkitRelativePath: '',
              }}
              validationSchema={CreateSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                void movieCreate(values)
                  .then((res) => {
                    if (res.status === 200) {
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
              {({ errors, touched, setFieldValue }) => (
                <Form>
                  <article>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="name">Name</label>
                      <Field name="name" placeholder="Name" />
                      {errors.name != null && (touched.name ?? false) ? <span>{errors.name}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="actor">Actor</label>
                      <Field name="actor" placeholder="Actor" />
                      {errors.actor != null && (touched.actor ?? false) ? <span>{errors.actor}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="director">Director</label>
                      <Field name="director" placeholder="Director" />
                      {errors.director != null && (touched.director ?? false) ? <span>{errors.director}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="duration">Duration</label>
                      <Field name="duration" placeholder="Duration" type="time" />
                      {errors.duration != null && (touched.duration ?? false) ? <span>{errors.duration}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="ageLimit">Age Limit</label>
                      <Field name="ageLimit" type="number" placeholder="Age Limit" />
                      {errors.ageLimit != null && (touched.ageLimit ?? false) ? <span>{errors.ageLimit}</span> : null}
                    </div>
                  </article>
                  <article>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="sessionTime">Session Time</label>
                      <Field name="sessionTime" placeholder="Session Time" type="date" />
                      {errors.sessionTime != null && (touched.sessionTime ?? false) ? <span>{errors.sessionTime}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="sessionTimeOut">Session Time Out</label>
                      <Field name="sessionTimeOut" placeholder="Session Time Out" type="date" />
                      {errors.sessionTimeOut != null && (touched.sessionTimeOut ?? false) ? <span>{errors.sessionTimeOut}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="genre">Genre</label>
                      <Field name="genre" placeholder="Genre" />
                      {errors.genre != null && (touched.genre ?? false) ? <span>{errors.genre}</span> : null}
                    </div>
                    <nav>
                      <div className={styled.modal__create__form__group}>
                        <div className={styled.modal__create__form__group__check}>
                          <label htmlFor="formats.d2">2D</label>
                          <Field name="formats.d2" type="checkbox" />
                          {errors.formats?.d2 != null && (touched.formats?.d2 ?? false) ? <span>{errors.formats?.d2}</span> : null}
                        </div>
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <div className={styled.modal__create__form__group__check}>
                          <label htmlFor="formats.d3">3D</label>
                          <Field name="formats.d3" type="checkbox" />
                          {errors.formats?.d3 != null && (touched.formats?.d3 ?? false) ? <span>{errors.formats?.d3}</span> : null}
                        </div>
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <div className={styled.modal__create__form__group__check}>
                          <label htmlFor="formats.d4">4D</label>
                          <Field name="formats.d4" type="checkbox" />
                          {errors.formats?.d4 != null && (touched.formats?.d4 ?? false) ? <span>{errors.formats?.d4}</span> : null}
                        </div>
                      </div>
                    </nav>
                  </article>
                  <article>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="synopsis">Synopsis</label>
                      <Field name="synopsis" placeholder="Synopsis" />
                      {errors.synopsis != null && (touched.synopsis ?? false) ? <span>{errors.synopsis}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__group}>
                      <label htmlFor="rating">Rating</label>
                      <Field name="rating" type="number" placeholder="Rating" />
                      {errors.rating != null && (touched.rating ?? false) ? <span>{errors.rating}</span> : null}
                    </div>
                    <nav>
                      <div className={styled.modal__create__form__group}>
                        <div className={styled.modal__create__form__group__check}>
                          <label htmlFor="languages.az">AZ</label>
                          <Field name="languages.az" type="checkbox" />
                          {errors.languages?.az != null && (touched.languages?.az ?? false) ? <span>{errors.languages?.az}</span> : null}
                        </div>
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <div className={styled.modal__create__form__group__check}>
                          <label htmlFor="languages.tu">TU</label>
                          <Field name="languages.tu" type="checkbox" />
                          {errors.languages?.tu != null && (touched.languages?.tu ?? false) ? <span>{errors.languages?.tu}</span> : null}
                        </div>
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <div className={styled.modal__create__form__group__check}>
                          <label htmlFor="languages.ru">RU</label>
                          <Field name="languages.ru" type="checkbox" />
                          {errors.languages?.ru != null && (touched.languages?.ru ?? false) ? <span>{errors.languages?.ru}</span> : null}
                        </div>
                      </div>
                      <div className={styled.modal__create__form__group}>
                        <div className={styled.modal__create__form__group__check}>
                          <label htmlFor="languages.en">EN</label>
                          <Field name="languages.en" type="checkbox" />
                          {errors.languages?.en != null && (touched.languages?.en ?? false) ? <span>{errors.languages?.en}</span> : null}
                        </div>
                      </div>
                    </nav>
                    <div className={styled.modal__create__form__group}>
                      <Field
                        name="file.filename"
                        placeholder="Image"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(event: { currentTarget: { files: unknown[] } }) => {
                          setFieldValue('file', event.currentTarget.files[0]);
                          console.log(event.currentTarget.files[0]);
                        }}
                      />
                      {errors.file != null && (touched.file ?? false) ? <span>{errors.file}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__group}>
                      <Field
                        name="fileCover.filename"
                        placeholder="Image Cover"
                        accept="image/png, image/jpeg"
                        type="file"
                        onChange={(event: { currentTarget: { files: unknown[] } }) => {
                          setFieldValue('fileCover', event.currentTarget.files[0]);
                          console.log(event.currentTarget.files[0]);
                        }}
                      />
                      {errors.fileCover != null && (touched.fileCover ?? false) ? <span>{errors.fileCover}</span> : null}
                    </div>
                    <div className={styled.modal__create__form__btn}>
                      <button type="submit">Create</button>
                      <button type="button" onClick={handleOpenCreate}>
                        Cancel
                      </button>
                    </div>
                  </article>
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
