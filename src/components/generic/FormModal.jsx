import React, { useState } from 'react';
import { Container, Button, Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';

const FormModal = ({
  open,
  handleClose,
  children,
  modalHeight,
  edit,
  editable,
}) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Modal
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Container maxWidth='md'>
        <Box
          sx={{
            bgcolor: '#080d12',
            height: modalHeight || '80vh',
            margin: '1.5rem 0 0 0',
          }}
        >
          {editable && (
            <IconButton
              sx={{
                float: 'left',
                margin: '1rem 0 0.5rem 1rem',
                backgroundColor: editMode ? '#313437' : '',
                bordeRadius: '12rem',
                '&:hover': {
                  backgroundColor: '#313437',
                },
              }}
              color='inherit'
              component='label'
              onClick={() => {
                edit();
                setEditMode(!editMode);
              }}
            >
              <ModeEditOutlineSharpIcon />
            </IconButton>
          )}

          <Button
            sx={{
              float: 'right',
              margin: '0.5rem 0.5rem 0 0',
              backgroundColor: '#313437',
              bordeRadius: '12rem',
            }}
            variant='contained'
            size='small'
            onClick={handleClose}
          >
            {''}
            <CloseIcon />
          </Button>
          {children}
        </Box>
      </Container>
    </Modal>
  );
};

export default FormModal;
