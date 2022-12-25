import { Box, Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { style } from '../Classes/ClassForm';
import { sections, standards } from '../Classes/ClassForm.container';
import './routineStyles.css';
import { weekDays, periods } from '../../constants/enumConstants.js';
import SlotContainer from './slot/Slot.container';

const Routine = ({
  standard,
  section,
  onSetSection,
  onSetStandard,
  getRoutine,
  routine,
  showRoutine,
  error,
  viewOnly,
}) => {
  return (
    <>
      <div className='timetable-header'>
        <Box
          component='form'
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            '& .MuiTextField-root': { m: 0.8, width: '25ch' },
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
            value={standard}
            onChange={onSetStandard}
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
            value={section}
            onChange={onSetSection}
          >
            {sections.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            sx={{
              backgroundColor: '#586680',
              color: '#fff',
              margin: '1rem',
              '&:hover': {
                backgroundColor: '#37393d',
                boxShadow: 'none',
              },
              '&:disabled': {
                backgroundColor: '#cccccc1c',
                color: '#66666688',
              },
            }}
            variant='contained'
            size='small'
            disabled={!(section && standard)}
            onClick={getRoutine}
          >
            Get Timetable
          </Button>
        </Box>
      </div>

      {standard && section && showRoutine && !error ? (
        <div>
          <div class='grid-container-head'>
            <div class='grid-item-head'>DAY</div>
            <div class='grid-item-head'>1ST</div>
            <div class='grid-item-head'>2ND</div>
            <div class='grid-item-head'>3RD</div>
            <div class='grid-item-head'>4TH</div>
            <div class='grid-item-head'>5TH</div>
            <div class='grid-item-head'>6TH</div>
            <div class='grid-item-head'>7TH</div>
            <div class='grid-item-head'>8TH</div>
          </div>
          <div class='grid-container'>
            {weekDays.map((day) => (
              <>
                <div class='grid-item'>{day}</div>
                {periods.map((period) => (
                  <SlotContainer
                    section={section}
                    standard={standard}
                    day={day}
                    period={period}
                    slotDetails={routine?.[day]?.[period]}
                    viewOnly={viewOnly}
                  />
                ))}
              </>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className='error-text'>{error?.response?.data?.errorMessage}</div>
      ) : (
        <div className='timetable-header'>
          {standard && section
            ? ''
            : 'Please select both standard and section for the timetable you want'}
        </div>
      )}
    </>
  );
};

export default Routine;
