import React from 'react';
import GenericChip from './GenericChip';

const GenericChipContainer = ({
  list,
  style,
  formError,
  specializations,
  handleSpecializations,
}) => {
  const { specializationsError } = formError;
  return (
    <GenericChip
      handleChange={handleSpecializations}
      items={specializations}
      list={list}
      style={style}
      error={specializationsError}
    />
  );
};

export default GenericChipContainer;
