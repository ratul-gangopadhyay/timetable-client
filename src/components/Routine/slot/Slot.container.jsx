import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Slot from './Slot';
import * as timetableActions from '../../../redux/store/timetables/timetableActions';

const SlotContainer = ({
  slotDetails,
  day,
  period,
  standard,
  section,
  viewOnly,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editable, setEditable] = useState(false);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const edit = () => setEditable(!editable);
  const handleDelete = () => setOpenConfirmationModal(true);
  const handleCancel = () => setOpenConfirmationModal(false);
  const handleConfirmation = () => {
    setOpenConfirmationModal(false);
    dispatch(
      timetableActions.deleteSlotRequest(standard, section, day, period)
    );
  };

  return (
    <Slot
      slotDetails={slotDetails}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      day={day}
      period={period}
      section={section}
      standard={standard}
      edit={edit}
      editable={editable}
      viewOnly={viewOnly}
      handleMouseOut={() => setShowDeleteIcon(false)}
      handleMouseOver={() => setShowDeleteIcon(true)}
      showDeleteIcon={showDeleteIcon}
      handleDelete={handleDelete}
      handleConfirmation={handleConfirmation}
      handleCancel={handleCancel}
      openConfirmationModal={openConfirmationModal}
    />
  );
};

export default SlotContainer;
