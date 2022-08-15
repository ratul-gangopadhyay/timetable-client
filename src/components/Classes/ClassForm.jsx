import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import './classesStyles.css';

const style = {
  label: {
    color: '#fff',
    fontWeight: 'bolder',
  },
  '& .MuiFormHelperText-contained': {
    color: '#fff',
    fontWeight: 'bolder',
  },
  '& .MuiInputBase-root': {
    color: '#fff',
    fontWeight: 'bolder',
  },
  '& label.Mui-focused': {
    color: '#fff',
    fontWeight: 'bolder',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
    fontWeight: 'bolder',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
      fontWeight: 'bolder',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
      fontWeight: 'bolder',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
      fontWeight: 'bolder',
    },
  },
};

const ClassForm = ({
  classData,
  errMsg,
  formError,
  handleChange,
  handleStrengthChange,
  handleReset,
  handleSubmit,
  standards,
  sections,
}) => {
  return (
    <>
      <h2 class='class-form-heading'>Add a new class</h2>
      <div className='class-form-box-container'></div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Box
          component='form'
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            '& .MuiTextField-root': { m: 2, width: '25ch' },
          }}
          autoComplete='off'
        >
          <TextField
            sx={style}
            id='standard'
            name='standard'
            select
            required
            label='Standard'
            value={classData?.standard}
            onChange={handleChange}
            helperText='Please select your currency'
          >
            {standards.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={style}
            id='section'
            name='section'
            select
            required
            label='Section'
            value={classData?.section}
            onChange={handleChange}
            helperText='Please select your currency'
          >
            {sections.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={style}
            id='outlined-number'
            name='classStrength'
            label='Class Strength'
            type='number'
            required
            value={classData?.classStrength}
            onChange={handleStrengthChange}
            helperText={errMsg}
            error={errMsg}
          />
        </Box>
        <div>
          <Button
            sx={{
              float: 'right',
              margin: '0.5rem 1rem 0 0',
              backgroundColor: '#313437',
            }}
            variant='contained'
            size='small'
            type='reset'
          >
            Reset
          </Button>
          <Button
            sx={{
              float: 'right',
              margin: '0.5rem 1rem 0 0',
              backgroundColor: '#313437',
            }}
            variant='contained'
            size='small'
            type='submit'
            disabled={errMsg}
          >
            Submit
          </Button>
          <span className='form-error'>{formError}</span>
        </div>
      </form>
    </>
  );
};

export default ClassForm;
