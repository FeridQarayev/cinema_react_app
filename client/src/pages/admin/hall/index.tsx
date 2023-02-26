import { Modal } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import * as Yup from 'yup';
import type Hall from '../../../interfaces/new.hall';
import styled from './hall.module.scss';

function HallAdmin(): JSX.Element {
  return <div>HallAdmin</div>;
}

export default HallAdmin;
