import React from 'react';
import TeacherFormModal from './TeacherFormModal';

const TeacherFormModalContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TeacherFormModal
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export default TeacherFormModalContainer;
