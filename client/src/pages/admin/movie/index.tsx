import { Modal } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import * as Yup from 'yup';
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
  return <div>MovieAdmin</div>;
}

export default MovieAdmin;
