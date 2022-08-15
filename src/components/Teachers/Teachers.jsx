import React from 'react';
import './teacherStyles.css';
import TeachersTableContainer from './TeachersTable.container';
import TeacherFormModalContainer from './TeacherFormModal.container';
import TeacherDataRefreshContainer from './TeacherDataRefresh.container';

const Teachers = () => {
  return (
    <div className='teacher-container'>
      <div className='teacher-header-container'></div>
      <div className='teachers-table-container'>
        <TeachersTableContainer />
      </div>
      <TeacherFormModalContainer />
      <TeacherDataRefreshContainer />
    </div>
  );
};

export default Teachers;
