import { Box, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { style } from '../Classes/ClassForm';
import { sections, standards } from '../Classes/ClassForm.container';
import './routineStyles.css';

const Routine = ({ standard, section, onSetSection, onSetStandard }) => {
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
        </Box>
      </div>

      {standard && section ? (
        <div>
          <div class='grid-container-head'>
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
            <div class='grid-item'>1</div>
            <div class='grid-item'>2</div>
            <div class='grid-item'>3</div>
            <div class='grid-item'>4</div>
            <div class='grid-item'>5</div>
            <div class='grid-item'>6</div>
            <div class='grid-item'>7</div>
            <div class='grid-item'>8</div>
            <div class='grid-item'>9</div>
            <div class='grid-item'>10</div>
            <div class='grid-item'>11</div>
            <div class='grid-item'>12</div>
            <div class='grid-item'>13</div>
            <div class='grid-item'>14</div>
            <div class='grid-item'>15</div>
            <div class='grid-item'>16</div>
            <div class='grid-item'>17</div>
            <div class='grid-item'>18</div>
            <div class='grid-item'>19</div>
            <div class='grid-item'>21</div>
            <div class='grid-item'>21</div>
            <div class='grid-item'>22</div>
            <div class='grid-item'>23</div>
            <div class='grid-item'>24</div>
            <div class='grid-item'>25</div>
            <div class='grid-item'>26</div>
            <div class='grid-item'>27</div>
            <div class='grid-item'>28</div>
            <div class='grid-item'>29</div>
            <div class='grid-item'>30</div>
            <div class='grid-item'>31</div>
            <div class='grid-item'>32</div>
            <div class='grid-item'>33</div>
            <div class='grid-item'>34</div>
            <div class='grid-item'>35</div>
            <div class='grid-item'>36</div>
            <div class='grid-item'>37</div>
            <div class='grid-item'>38</div>
            <div class='grid-item'>39</div>
            <div class='grid-item'>40</div>
          </div>
        </div>
      ) : (
        <div className='timetable-header'>
          Please select both standard and section for the timetable you want
        </div>
      )}
    </>
  );
};

export default Routine;
