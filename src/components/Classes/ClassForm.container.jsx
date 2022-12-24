import React, { useState } from 'react';
import ClassForm from './ClassForm';
import { useDispatch } from 'react-redux';
import * as classesActions from '../../redux/store/classes/classesActions';

export const sections = [
  {
    value: '',
    label: 'No Selection',
  },
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
  },
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'D',
    label: 'D',
  },
];
export const standards = [
  {
    value: '',
    label: 'No Selection',
  },
  {
    value: 'I',
    label: 'I',
  },
  {
    value: 'II',
    label: 'II',
  },
  {
    value: 'III',
    label: 'III',
  },
  {
    value: 'IV',
    label: 'IV',
  },
  {
    value: 'V',
    label: 'V',
  },
  {
    value: 'VI',
    label: 'VI',
  },
  {
    value: 'VII',
    label: 'VII',
  },
  {
    value: 'VIII',
    label: 'VIII',
  },
  {
    value: 'IX',
    label: 'IX',
  },
  {
    value: 'X',
    label: 'X',
  },
  {
    value: 'XI',
    label: 'XI',
  },
  {
    value: 'XII',
    label: 'XII',
  },
];
const ClassFormContainer = ({ handleClose }) => {
  const initialState = {
    standard: '',
    section: '',
    classStrength: '',
  };

  const dispatch = useDispatch();

  const [classData, setClassData] = useState(initialState);
  const [strength, setStrength] = useState(0);
  const [formError, setFormError] = useState('');

  const [errMsg, setErrMsg] = useState('');

  const handleStrengthChange = ({ target: { value, name } }) => {
    const message = validateClassStrength(value);
    setErrMsg(message);
    setStrength(value);
    setClassData({
      ...classData,
      [name]: value,
    });
  };

  function validateClassData() {
    const { standard, section, classStrength } = classData;
    const formErrorMessage =
      standard && section && classStrength
        ? ''
        : 'Please fill out the required fields';
    setFormError(formErrorMessage);
  }

  function validateClassStrength(strengthVal) {
    return strengthVal < 50 || strengthVal > 70 ? 'Invalid Class Strength' : '';
  }

  const handleChange = ({ target: { value, name } }) => {
    setClassData({
      ...classData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setErrMsg('');
    setClassData(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateClassData();
    if (!formError) {
      dispatch(classesActions.insertClassRequest(classData));
      handleClose();
    }
  };

  return (
    <ClassForm
      classData={classData}
      standards={standards}
      sections={sections}
      handleClose={handleClose}
      errMsg={errMsg}
      formError={formError}
      handleStrengthChange={handleStrengthChange}
      handleChange={handleChange}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
    />
  );
};

export default ClassFormContainer;
