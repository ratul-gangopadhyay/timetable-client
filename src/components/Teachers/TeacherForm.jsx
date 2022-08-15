import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './teacherStyles.css';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import GenericChipContainer from '../generic/GenericChip.container';

const TeacherForm = ({
  teacher,
  handleChange,
  handleReset,
  handleSubmit,
  handleDateChange,
  formError,
  subjects,
  specializations,
  handleSpecializations,
  invalidForm,
}) => {
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
    '& .MuiButtonBase-root': {
      color: '#fff',
    },
    '& .MuiButtonBase-root:hover': {
      backgroundColor: '#5c5757',
      transitionDuration: '450ms',
    },
  };
  return (
    <>
      <h2 className='teacher-form-heading'>Add a new Teacher</h2>
      <div className='teacher-form-box-container'></div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Box
          component='form'
          sx={{
            padding: '0 1.5rem 0 1.5rem',
            display: 'flex',
            justifyContent: 'space-around',
            '& .MuiTextField-root': { m: 2, width: '50ch' },
          }}
          autoComplete='off'
        >
          <TextField
            sx={style}
            id='Name'
            name='teacherName'
            type='text'
            required
            label='Name'
            value={teacher?.teacherName}
            onChange={handleChange}
            helperText={formError?.nameError}
            error={formError?.nameError}
          />
          <TextField
            sx={style}
            id='age'
            name='age'
            type='number'
            required
            label='Age'
            value={teacher?.age}
            onChange={handleChange}
            helperText={formError?.ageError}
            error={formError?.ageError}
          />
        </Box>
        <Box
          component='form'
          sx={{
            padding: '0 1.5rem 0 1.5rem',
            display: 'flex',
            justifyContent: 'space-around',
            '& .MuiTextField-root': { m: 2, width: '50ch' },
          }}
          autoComplete='off'
        >
          <TextField
            sx={style}
            id='salary'
            name='salary'
            type='number'
            required
            label='Salary'
            value={teacher?.salary}
            onChange={handleChange}
            error={formError?.salaryError}
            helperText={formError?.salaryError}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label='Date of Joining'
              inputFormat='dd/MM/yyyy'
              value={teacher?.dateOfJoining}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  sx={style}
                  {...params}
                  error={formError?.dateError}
                  helperText={formError?.dateError}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Box
          component='form'
          sx={{
            padding: '0 1.5rem 0 1.5rem',
            display: 'flex',
            '& .MuiTextField-root': { m: 2, width: '25ch' },
          }}
        >
          <GenericChipContainer
            list={subjects}
            style={style}
            specializations={specializations}
            handleSpecializations={handleSpecializations}
            formError={formError}
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
            disabled={invalidForm}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default TeacherForm;
