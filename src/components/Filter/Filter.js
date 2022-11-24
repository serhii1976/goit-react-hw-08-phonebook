import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FindText, InputFind } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <FindText>Find contacts by name</FindText>
      <InputFind
        type="text"
        name="name"
        onChange={handleFilterChange}
        value={filter.value}
      />
    </>
  );
};
