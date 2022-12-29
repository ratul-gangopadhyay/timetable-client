import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import '../slotStyles.css';
import { style } from '../../../Classes/ClassForm';
import _ from 'lodash';

const SlotForm = ({
  slot,
  handleTeacherChange,
  handleSubjectChange,
  teachers,
  subjects,
  handleSubmit,
  handleReset,
  valid,
  editable,
  submit,
  handleSave
}) => {
  return (
    <>
      <h2 class='class-form-heading'>Slot Details</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Box
          component='form'
          sx={{
            padding: '0 1.5rem 0 1.5rem',
            display: 'flex',
            justifyContent: 'space-around',
            '& .MuiTextField-root': { m: 2, width: '45ch' },
          }}
          autoComplete='off'
        >
          <TextField
            sx={style}
            id='standard'
            name='standard'
            label='Standard'
            value={slot?.standard}
            disabled
          />
          <TextField
            sx={style}
            id='section'
            name='section'
            label='Section'
            value={slot?.section}
            disabled
          />
        </Box>
        <Box
          component='form'
          sx={{
            padding: '0 1.5rem 0 1.5rem',
            display: 'flex',
            justifyContent: 'space-around',
            '& .MuiTextField-root': { m: 2, width: '45ch' },
          }}
          autoComplete='off'
        >
          <TextField
            sx={style}
            id='weekDay'
            name='weekDay'
            label='WeekDay'
            value={slot?.weekDay}
            disabled
          />
          <TextField
            sx={style}
            id='period'
            name='period'
            label='Period'
            value={slot?.period}
            disabled
          />
        </Box>
        <Box
          component='form'
          sx={{
            padding: '0 1.5rem 0 1.5rem',
            display: 'flex',
            justifyContent: 'space-around',
            '& .MuiTextField-root': { m: 2, width: '45ch' },
          }}
          autoComplete='off'
        >
          <TextField
            sx={style}
            id='teacherId'
            name='teacherId'
            select
            required
            label='Teacher'
            value={slot?.teacherId}
            onChange={handleTeacherChange}
            helperText='Please select teacher to assign another teacher'
            disabled={!submit && !editable}
          >
            {teachers?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={style}
            id='subject'
            name='subject'
            select
            required
            label='Subject'
            value={slot?.subject}
            onChange={handleSubjectChange}
            helperText='Please select Teacher first and then a subject to assign some other subject'
            disabled={!submit && !editable}
          >
            {subjects?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {_.capitalize(option.label.replaceAll('_', ' '))}
              </MenuItem>
            ))}
          </TextField>
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
          {submit && (
            <Button
              sx={{
                float: 'right',
                margin: '0.5rem 1rem 0 0',
                backgroundColor: '#313437',
              }}
              variant='contained'
              size='small'
              type='submit'
              disabled={!valid}
            >
              Submit
            </Button>
          )}
          {editable && (
            <Button
              sx={{
                float: 'right',
                margin: '0.5rem 1rem 0 0',
                backgroundColor: '#313437',
              }}
              variant='contained'
              size='small'
              disabled={!valid}
              onClick={handleSave}
            >
              Save
            </Button>
          )}
          {/* {slotError && (
            <span className='form-error'>
              {slotError?.response?.data?.errorMessage}
            </span>
          )} */}
        </div>
      </form>
    </>
  );
};

export default SlotForm;
