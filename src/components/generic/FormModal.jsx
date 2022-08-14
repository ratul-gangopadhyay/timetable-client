import React from 'react';
import { Container, Button, Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FormModal = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Container maxWidth='md'>
        <Box
          sx={{
            bgcolor: '#080d12',
            height: '93vh',
            margin: '1.5rem 0 0 0',
          }}
        >
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
