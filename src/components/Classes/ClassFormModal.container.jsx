import React from 'react';
import ClassFormModal from './ClassFormModal';

const ClassFormModalContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ClassFormModal
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export default ClassFormModalContainer;
