import React, { useState } from 'react';
import Routine from './Routine';

const RoutineContainer = () => {
  const [section, setSection] = useState();
  const [standard, setStandard] = useState();
  return (
    <Routine
      section={section}
      standard={standard}
      onSetSection={(event) => setSection(event.target.value)}
      onSetStandard={(event) => setStandard(event.target.value)}
    />
  );
};

export default RoutineContainer;
