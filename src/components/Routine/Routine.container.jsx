import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routine from './Routine';
import * as timetableActions from '../../redux/store/timetables/timetableActions';
import timetableSelector from '../../redux/store/timetables/timetableSelector';

const RoutineContainer = ({
  viewOnly,
}) => {
  const dispatch = useDispatch();
  const [section, setSection] = useState();
  const [standard, setStandard] = useState();
  const [showRoutine, setShowRoutine] = useState(false);

  const routine = useSelector(timetableSelector.timetables.routine);
  const error = useSelector(timetableSelector.timetables.error);

  useEffect(() => {
    dispatch(timetableActions.resetRoutine());
  }, []);

  const getRoutine = () => {
    dispatch(timetableActions.getRoutineRequest(standard, section));
    setShowRoutine(!error);
  };

  const handleSectionChange = (event) => {
    dispatch(timetableActions.resetRoutine());
    setSection(event.target.value);
    setShowRoutine(false);
  };
  const handleStandardChange = (event) => {
    dispatch(timetableActions.resetRoutine());
    setStandard(event.target.value);
    setShowRoutine(false);
  };

  return (
    <Routine
      section={section}
      standard={standard}
      onSetSection={handleSectionChange}
      onSetStandard={handleStandardChange}
      getRoutine={getRoutine}
      routine={routine.routineMap}
      showRoutine={showRoutine}
      error={error}
      viewOnly={viewOnly}
    />
  );
};

export default RoutineContainer;
