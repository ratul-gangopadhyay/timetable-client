import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import './teacherStyles.css';
import TeachersTable from './TeachersTable';
import teachersSelector from '../../redux/store/teachers/teachersSelector';
import * as teachersActions from '../../redux/store/teachers/teachersActions';
import { useNavigate } from 'react-router';

const TeachersTableContainer = () => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(15);
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
  ];
  const rows = useSelector(teachersSelector.teachers.list);
  const loading = useSelector(teachersSelector.teachers.loading);

  const openTeacher = (event) => {
    const { id } = event;
    navigate(id);
  };

  if (!loading) {
    return (
      <TeachersTable
        columns={columns}
        rows={rows}
        pageSize={pageSize}
        setPageSize={setPageSize}
        openTeacher={openTeacher}
      />
    );
  }
};

export default TeachersTableContainer;
