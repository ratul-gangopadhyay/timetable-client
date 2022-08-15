import React, { useCallback } from 'react';
import TeacherDataRefresh from './TeacherDataRefresh';
import * as teachersActions from '../../redux/store/teachers/teachersActions';
import { useDispatch } from 'react-redux';

const TeacherDataRefreshContainer = () => {
  const dispatch = useDispatch();
  const refresh = useCallback(() => {
    dispatch(teachersActions.getTeachersRequest());
  }, []);

  return <TeacherDataRefresh refresh={refresh} />;
};

export default TeacherDataRefreshContainer;
