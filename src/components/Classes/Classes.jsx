import React from 'react';
import ClassDataRefreshContainer from './ClassDataRefresh.container';
import './classesStyles.css';
import ClassesTableContainer from './ClassesTable.container';
import ClassFormModalContainer from './ClassFormModal.container';

const Classes = () => {
  return (
    <div className='class-container'>
      <div className='classes-table-container'>
        <ClassesTableContainer />
      </div>
      <ClassFormModalContainer />
      <ClassDataRefreshContainer />
    </div>
  );
};

export default Classes;
