import { InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import CustomFilterForm from '../../utility/CustomFilterForm';

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
    <CustomFilterForm>
      <>
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
            <optgroup key={name} label={name}>
              <option value={name + a}>{a}</option>
              <option value={name + b}>{b}</option>
            </optgroup>
          ))}
        </Select>
      </>
    </CustomFilterForm>
  );
};

export default ArrangeWrapper;
