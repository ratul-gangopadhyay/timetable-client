import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import _ from 'lodash';
import './genericStyles.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: '#27615f',
      color: '#fff',
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function GenericChip({
  items,
  list,
  style,
  handleChange,
  error,
}) {
  return (
    <div>
      <FormControl sx={{ ...style, m: 2, width: '56.6vw' }} error={error}>
        <InputLabel
          sx={{ ...style, color: '#fff' }}
          id='demo-multiple-chip-label'
          error={error}
        >
          Specializations
        </InputLabel>
        <Select
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          multiple
          sx={style}
          value={items}
          onChange={handleChange}
          input={
            <OutlinedInput id='select-multiple-chip' label='Specializations' />
          }
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  sx={{
                    color: '#fff',
                    backgroundColor: '#636060',
                  }}
                  key={value}
                  label={_.capitalize(value.replaceAll('_', ' '))}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {list.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{ backgroundColor: '#322c2c' }}
            >
              {_.capitalize(name.replaceAll('_', ' '))}
            </MenuItem>
          ))}
        </Select>
        {error && <span className='specializations-error'>{error}</span>}
      </FormControl>
    </div>
  );
}
