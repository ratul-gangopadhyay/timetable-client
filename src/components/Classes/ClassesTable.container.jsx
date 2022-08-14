import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classesSelector from '../../redux/store/classes/classesSelector';
import ClassesTable from './ClassesTable';
import * as classesActions from '../../redux/store/classes/classesActions';

const ClassesTableContainer = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(classesActions.getClassesRequest());
  }, []);

  const columns = [
    {
      field: 'standard',
      headerName: 'Standard',
      width: 407,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'section',
      headerName: 'Section',
      width: 407,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'classStrength',
      headerName: 'Strength',
      width: 407,
      headerAlign: 'center',
      align: 'center',
    },
  ];
  const rows = useSelector(classesSelector.classes.list);
  const loading = useSelector(classesSelector.classes.loading);

  if (!loading) {
    return (
      <ClassesTable
        columns={columns}
        rows={rows}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    );
  }
};

export default ClassesTableContainer;
