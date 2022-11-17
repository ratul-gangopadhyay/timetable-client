import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import teachersSelector from '../../redux/store/teachers/teachersSelector';
import TeacherDetails from './TeacherDetails';

const TeacherDetailsContainer = () => {
  const navigate = useNavigate();
  const backToTeachers = () => navigate(-1);
  const { id } = useParams();
  const teacher = useSelector((state) =>
    teachersSelector.teachers.byId(state, id)
  );
  return <TeacherDetails teacher={teacher} backToTeachers={backToTeachers} />;
};

export default TeacherDetailsContainer;
