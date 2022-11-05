import {
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import CustomFilterForm from '../../utility/CustomFilterForm';

type P = {
  priceRange: string;
  priceRanges: string[];
  setPriceRange: (value: string) => void;
};

const PriceRangeWrapper: FC<P> = ({
  priceRange,
  priceRanges,
  setPriceRange,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setPriceRange(event.target.value);
    // fire price range items event from store (create it)
  };
  return (
    <>
      <InputLabel id="select-category-label">Categories</InputLabel>
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
              key={item}
              value={item}
              control={<Radio />}
              label={i != 0 ? item + ' $' : item}
            />
          ))}
        </RadioGroup>
      </CustomFilterForm>
    </>
  );
};

export default PriceRangeWrapper;
