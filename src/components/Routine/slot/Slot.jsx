import React from 'react';
import FormModal from '../../generic/FormModal';
import SlotFormContainer from './form/SlotForm.container';
import './slotStyles.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton } from '@mui/material';
import _ from 'lodash';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import PageviewIcon from '@mui/icons-material/Pageview';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from '../../generic/ConfirmationModal';

const Slot = ({
  slotDetails,
  open,
  handleOpen,
  handleClose,
  day,
  period,
  standard,
  section,
  edit,
  editable,
  viewOnly,
  handleMouseOver,
  handleMouseOut,
  showDeleteIcon,
  openConfirmationModal,
  handleCancel,
  handleConfirmation,
  handleDelete,
}) => (
  <>
    {viewOnly ? (
      <>
        <div
          class='grid-slot-disabled'
          id={`${day}-${period}-disabled`}
          data-tooltip-delay-show={400}
        >
          {_.capitalize(slotDetails?.subject).replaceAll('_', ' ')}
        </div>
        <Tooltip
          anchorId={`${day}-${period}-disabled`}
          html={`${
            slotDetails?.teacherName || 'Not Assigned'
          }<br/>${_.capitalize(slotDetails?.subject).replaceAll('_', ' ')}`}
          place='top'
          style={{
            backgroundColor: '#237ab0',
            opacity: '1',
          }}
        />
      </>
    ) : (
      <>
        {!slotDetails && (
          <div class='grid-slot'>
            <IconButton
              color='inherit'
              component='label'
              sx={{
                '&:hover': {
                  backgroundColor: '#392f2f',
                },
              }}
              onClick={handleOpen}
            >
              <AddBoxIcon />
            </IconButton>
          </div>
        )}
        {slotDetails && (
          <>
            <div
              class='grid-slot'
              id={`${day}-${period}`}
              data-tooltip-delay-show={400}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {showDeleteIcon ? (
                <div>
                  <IconButton
                    color='inherit'
                    component='label'
                    onClick={handleOpen}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#392f2f',
                      },
                    }}
                  >
                    <PageviewIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                  <IconButton
                    onClick={handleDelete}
                    color='inherit'
                    component='label'
                    sx={{
                      '&:hover': {
                        backgroundColor: '#392f2f',
                      },
                    }}
                  >
                    <DeleteIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                </div>
              ) : (
                _.capitalize(slotDetails?.subject).replaceAll('_', ' ')
              )}
            </div>
            <Tooltip
              anchorId={`${day}-${period}`}
              html={`${slotDetails?.teacherName || 'Not Assigned'}<br/>${
                _.capitalize(slotDetails?.subject).replaceAll('_', ' ') ||
                'Not Assigned'
              }`}
              place='top'
              style={{
                backgroundColor: '#579f88',
                opacity: '1',
              }}
            />
          </>
        )}
      </>
    )}
    <FormModal
      open={open}
      handleClose={handleClose}
      modalHeight='70vh'
      edit={edit}
      editable={Boolean(slotDetails?.subject)}
    >
      <SlotFormContainer
        day={day}
        period={period}
        section={section}
        standard={standard}
        slotDetails={slotDetails}
        handleClose={handleClose}
        editable={editable}
        submit={!Boolean(slotDetails?.subject)}
      />
    </FormModal>
    <ConfirmationModal
      open={openConfirmationModal}
      handleCancel={handleCancel}
      handleConfirmation={handleConfirmation}
      message='Are you sure you want to delete this slot info ?'
    />
  </>
);

export default Slot;
