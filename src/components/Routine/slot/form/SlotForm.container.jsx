import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as timetableActions from '../../../../redux/store/timetables/timetableActions';
import * as teachersActions from '../../../../redux/store/teachers/teachersActions';
import teachersSelector from '../../../../redux/store/teachers/teachersSelector';
import timetableSelector from '../../../../redux/store/timetables/timetableSelector';
import SlotForm from './SlotForm';

const SlotFormContainer = ({
  slotDetails,
  day,
  period,
  standard,
  section,
  handleClose,
  editable,
  submit,
}) => {
  const initialSlot = {
    standard,
    section,
    period,
    weekDay: day,
    teacherId: slotDetails?.teacherId || '',
    subject: slotDetails?.subject || '',
  };

  const dispatch = useDispatch();
  const [slot, setSlot] = useState(initialSlot);
  const [valid, setValid] = useState(slot?.teacherId && slot?.subject);

  const teachers = useSelector(teachersSelector.teachers.list).map(
    ({ id, teacherName }) => ({
      value: id,
      label: teacherName,
    })
  );

  const subjects = useSelector((state) =>
    teachersSelector.teachers.byTeacherId(state, slot?.teacherId)
  )?.specializations?.map((subject) => ({
    value: subject,
    label: subject,
  }));

  useEffect(() => {
    dispatch(teachersActions.getTeachersRequest());
    if (slot?.teacherId) {
      dispatch(teachersActions.getTeacherRequest(slot?.teacherId));
    }
  }, []);

  const handleTeacherChange = ({ target: { name, value } }) => {
    setSlot({
      ...slot,
      subject: '',
      [name]: value,
    });
    setValid(false);
    dispatch(teachersActions.getTeacherRequest(value));
  };

  const handleSubjectChange = ({ target: { name, value } }) => {
    setSlot({
      ...slot,
      [name]: value,
    });
    setValid(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(timetableActions.insertSlotRequest(slot));
    handleClose();
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch(
      timetableActions.updateSlotRequest(
        standard,
        section,
        day,
        period,
        slot
      )
    );
    handleClose();
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSlot(initialSlot);
  };

  return (
    <SlotForm
      slot={slot}
      handleTeacherChange={handleTeacherChange}
      handleSubjectChange={handleSubjectChange}
      teachers={teachers}
      subjects={subjects}
      handleSubmit={handleSubmit}
      handleSave={handleSave}
      handleReset={handleReset}
      valid={valid}
      editable={editable}
      submit={submit}
    />
  );
};

export default SlotFormContainer;
