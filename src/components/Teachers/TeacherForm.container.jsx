import React, { useState } from 'react';
import TeacherForm from './TeacherForm';
import * as teachersActions from '../../redux/store/teachers/teachersActions';
import { useDispatch } from 'react-redux';

const TeacherFormContainer = ({ handleClose }) => {
  const initialState = {
    teacherName: '',
    age: '',
    salary: '',
    dateOfJoining: new Date(),
    specializations: [],
  };

  const initialError = {
    nameError: '',
    ageError: '',
    salaryError: '',
    dateError: '',
    specializationsError: '',
  };

  const [teacher, setTeacher] = useState(initialState);
  const [formError, setFormError] = useState(initialError);

  const dispatch = useDispatch();

  const handleDateChange = (dateOfJoining) => {
    validateDOJ(dateOfJoining);
    setTeacher({
      ...teacher,
      dateOfJoining,
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    validateTeacher(name, value);
    setTeacher({
      ...teacher,
      [name]: value,
    });
  };

  const subjects = [
    'BIOLOGY',
    'CHEMISTRY',
    'COMPUTER_SCIENCE',
    'ENGLISH_LANGUAGE',
    'ENGLISH_LITERATURE',
    'EXTRA_CURRICULAR_ACTIVITIES',
    'GAMES',
    'GEOGRAPHY',
    'HINDI',
    'HISTORY',
    'MATHEMATICS',
    'MORAL_SCIENCE',
    'PHYSICAL_TRAINING',
    'PHYSICS',
    'SOCIAL_STUDIES',
  ];

  const [items, setItems] = React.useState([]);
  const handleSpecializations = ({ target: { value } }) => {
    validateSpecializations(value);
    setItems(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    setTeacher({
      ...teacher,
      specializations: [...value],
    });
  };

  const handleReset = () => {
    setFormError(initialError);
    setItems([]);
    setTeacher(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(teachersActions.insertTeachersRequest(teacher));
    handleClose();
  };

  function validateTeacher(name, value) {
    switch (name) {
      case 'teacherName':
        validateName(value);
        break;
      case 'age':
        validateAge(value);
        break;
      case 'dateOfJoining':
        validateDOJ(value);
        break;
      case 'salary':
        validateSalary(value);
        break;
      case 'specializations':
        validateSpecializations(value);
        break;
    }
  }

  function validateName(name) {
    const nameError = name.match(/[A-Z][a-z]*/) ? '' : 'Invalid Name';
    setFormError({ ...formError, nameError });
  }

  function validateAge(age) {
    const ageError =
      age >= 25 && age <= 65
        ? ''
        : 'Age should be between 25 and 65 (inclusive)';
    setFormError({ ...formError, ageError });
  }

  function validateSalary(salary) {
    const salaryError =
      salary >= 15000 && salary <= 300000 ? '' : 'Invalid Salary';
    setFormError({ ...formError, salaryError });
  }

  function validateDOJ(date) {
    const minDate = new Date('01/01/2000');
    const currDate = new Date();
    const dateError =
      date > minDate && date <= currDate
        ? ''
        : 'You cannot add employee in future date or before 1st Jan 2000';
    setFormError({ ...formError, dateError });
  }

  function validateSpecializations(specializations) {
    const specializationsError =
      specializations.length <= 5
        ? ''
        : 'You cannot add more than five subjects for a teacher';
    setFormError({
      ...formError,
      specializationsError,
    });
  }

  return (
    <TeacherForm
      teacher={teacher}
      handleClose={handleClose}
      handleChange={handleChange}
      handleDateChange={handleDateChange}
      formError={formError}
      subjects={subjects}
      specializations={items}
      handleSpecializations={handleSpecializations}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
      invalidForm={
        formError.nameError ||
        formError.ageError ||
        formError.salaryError ||
        formError.dateError ||
        formError.specializationsError
      }
    />
  );
};

export default TeacherFormContainer;
