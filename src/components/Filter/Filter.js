import React from 'react';
import PropTypes from 'prop-types';
import { FindText, InputFind } from 'components/Filter/Filter.styled';

export const Filter = ({ value, handleChange }) => {
  return (
    <>
      <FindText>Find contacts by name</FindText>
      <InputFind
        type="text"
        name="name"
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
