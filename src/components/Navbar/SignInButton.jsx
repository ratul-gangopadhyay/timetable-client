import React from 'react';
import Button from '@mui/material/Button';
import './navbarStyles.css';
import LoginIcon from '@mui/icons-material/Login';

const SignInButton = () => {
  return (
    <Button
      sx={{
        backgroundColor: 'rgb(5, 9, 24)',
        '&:hover': {
          backgroundColor: 'rgba(5, 9, 24, 0.606)',
          boxShadow: 'none',
        },
      }}
      size='small'
      variant='contained'
    >
      Sign In
      <LoginIcon />
    </Button>
  );
};

export default SignInButton;
