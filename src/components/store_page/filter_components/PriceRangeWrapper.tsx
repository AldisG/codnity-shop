import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CustomFilterForm from '../../utility/CustomFilterForm';

const priceRanges = ['all', '0-20', '20-100', '100-1000'];

const PriceRangeWrapper = () => {
  const [priceRange, setPriceRange] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPriceRange(event.target.value);
    // fire price range items event from store (create it)
  };
  return (
    <>
      <CustomFilterForm>
        <RadioGroup
          sx={{ display: { xs: 'none', md: 'grid' } }}
          aria-labelledby="controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={priceRange}
          onChange={handleChange}
        >
          {priceRanges.map((item, i: number) => (
            <FormControlLabel
              defaultValue={priceRanges[0]}
              key={item}
              value={item}
              control={<Radio />}
              label={i != 0 ? item + ' $' : item}
            />
          ))}
        </RadioGroup>
      </CustomFilterForm>

      <CustomFilterForm>
        <Box display={{ xs: 'grid', md: 'none' }}>
          <InputLabel id="controlled-radio-buttons-group">
            Price ranges
          </InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            value={priceRange}
            label="category"
            onChange={handleChange}
          >
            {priceRanges.map((item) => (
              <MenuItem key={item} value={item} sx={{ width: '100%' }}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </CustomFilterForm>
    </>
  );
};

export default PriceRangeWrapper;
