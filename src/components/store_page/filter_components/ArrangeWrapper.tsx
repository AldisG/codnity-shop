import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC, useState } from 'react';

// for switch statement in here
const arangeByOptions = [
  { name: 'date', a: 'youngest first', b: 'oldest first' },
  { name: 'price', a: 'highest first', b: 'lowest first' },
  { name: 'rating', a: 'highest first', b: 'lowest first' },
];
const ArrangeWrapper = () => {
  const [changeOrder, setchangeOrder] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setchangeOrder(event.target.value);
    // fire rearrange items event from store (create it)
  };
  return (
    <FormControl variant="standard" fullWidth sx={{ backgroundColor: '#eee' }}>
      <InputLabel id="select-order-label">Order by</InputLabel>
      <Select
        native
        defaultValue={''}
        id="select-order-label-group"
        label="order"
        onChange={handleChange}
        value={changeOrder}
      >
        {arangeByOptions?.map(({ name, a, b }) => (
          <optgroup label={name}>
            <option value={a}>{a}</option>
            <option value={b}>{b}</option>
          </optgroup>
        ))}
      </Select>
    </FormControl>
  );
};

export default ArrangeWrapper;
