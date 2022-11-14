import {
  Box,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from '../../../store/redux/hooks';
import { handleFiltering } from '../../../store/slices/storeProductsSlice';
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
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setPriceRange(event.target.value);
    dispatch(handleFiltering({type: 'priceRange', value}))

  };
  return (
    <>
      <InputLabel
        id="select-category-label"
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        Price range
      </InputLabel>
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
