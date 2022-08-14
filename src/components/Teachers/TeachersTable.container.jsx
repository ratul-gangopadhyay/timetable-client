import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import './teacherStyles.css';
import TeachersTable from './TeachersTable';
import teachersSelector from '../../redux/store/teachers/teachersSelector';
import * as teachersActions from '../../redux/store/teachers/teachersActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const TeachersTableContainer = () => {
  const [pageSize, setPageSize] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(teachersActions.getTeachersRequest());
  }, []);

  const columns = [
    {
      field: 'teacherName',
      headerName: 'Name',
      width: 300,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 300,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'salary',
      headerName: 'Salary',
      width: 300,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'dateOfJoining',
      headerName: 'Joining Date',
      width: 300,
      headerAlign: 'left',
      align: 'left',
      renderCell: (date) => moment(date.value).format('DD-MM-YYYY'),
    },
    /* {
      field: 'specializations',
      headerName: 'Subjects Taught',
      width: 650,
      headerAlign: 'left',
      align: 'left',
    }, */
  ];
  const rows = useSelector(teachersSelector.teachers.list);
  const loading = useSelector(teachersSelector.teachers.loading);

  if (!loading) {
    return (
      <TeachersTable
        columns={columns}
        rows={rows}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    );
  }
};

export default TeachersTableContainer;
