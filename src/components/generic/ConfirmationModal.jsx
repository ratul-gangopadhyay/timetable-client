import { Box, Button, Container, Modal } from '@mui/material';
import React from 'react';

const ConfirmationModal = ({
  message,
  open,
  handleCancel,
  handleConfirmation,
}) => {
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
            height: '21vh',
            width: '70vh',
            padding: '1.5rem',
            justifyContent: 'center',
            borderRadius: '0.3rem',
            position: 'relative',
            left: '13rem',
            top: '9rem',
          }}
        >
          {message}
          <Button
            sx={{
              float: 'left',
              position: 'relative',
              top: '2rem',
              left: '8rem',
              backgroundColor: '#313437',
            }}
            variant='contained'
            size='small'
            onClick={handleConfirmation}
          >
            Yes
          </Button>
          <Button
            sx={{
              float: 'right',
              position: 'relative',
              top: '2rem',
              right: '8rem',
              backgroundColor: '#313437',
            }}
            variant='contained'
            size='small'
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default ConfirmationModal;
