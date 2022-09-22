import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';

const priceRanges = ['all', '0-20', '20-100', '100-1000'];

const PriceRangeWrapper = () => {
  const [priceRange, setPriceRange] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPriceRange(event.target.value);
    // fire price range items event from store (create it)
  };
  return (
    <FormControl>
      <FormLabel id="controlled-radio-buttons-group">Prices from</FormLabel>
      <RadioGroup
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={priceRange}
        onChange={handleChange}
      >
        {priceRanges.map((item, i: number) => (
          <FormControlLabel
            value={item}
            control={<Radio />}
            label={i != 0 ? item + ' $' : item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default PriceRangeWrapper;
