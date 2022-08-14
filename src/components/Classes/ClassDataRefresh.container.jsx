import React, { useCallback } from 'react';
import ClassDataRefresh from './ClassDataRefresh';
import * as classesActions from '../../redux/store/classes/classesActions';
import { useDispatch } from 'react-redux';

const ClassDataRefreshContainer = () => {
  const dispatch = useDispatch();
  const refresh = useCallback(() => {
    dispatch(classesActions.getClassesRequest());
  }, []);

  return <ClassDataRefresh refresh={refresh} />;
};

export default ClassDataRefreshContainer;
