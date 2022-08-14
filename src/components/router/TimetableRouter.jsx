import React from 'react';
import { Route, Routes } from 'react-router';
import AdminContainer from '../Admin/Admin.container';
import ClassesContainer from '../Classes/Classes.container';
import GuestContainer from '../Guest/Guest.container';
import TimetableHomeContainer from '../HomePage/TimetableHome.container';
import RoutineContainer from '../Routine/Routine.container';
import TeachersContainer from '../Teachers/Teachers.container';

const TimetableRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<TimetableHomeContainer />} />
        <Route path='admin' element={<AdminContainer />}>
          <Route index element={<TeachersContainer />} />
          <Route path='teachers' element={<TeachersContainer />} />
          <Route path='classes' element={<ClassesContainer />} />
          <Route path='routine' element={<RoutineContainer />} />
        </Route>
        <Route path='/guest' element={<GuestContainer />} />
      </Routes>
    </>
  );
};

export default TimetableRouter;
