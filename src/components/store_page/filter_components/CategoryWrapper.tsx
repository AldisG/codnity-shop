import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { useAppDispatch } from '../../../store/redux/hooks';
import { changeDisplayedItemsByCategory } from '../../../store/slices/storeProductsSlice';
import { categories } from '../../utility/categories';
import { convertSelectValueToString } from '../../utility/convertSelectValueToString';
import CustomFilterForm from '../../utility/CustomFilterForm';

const CategoryWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectedCategory(value);
    dispatch(changeDisplayedItemsByCategory(value));
  };

  return (
    <CustomFilterForm>
      <>
        <InputLabel id="select-category-label">Categories</InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          value={selectedCategory}
          label="category"
          onChange={handleChange}
        >
          {categories.map(({ label, name }) => (
            <MenuItem value={name} key={name}>
              <Typography>{label}</Typography>
            </MenuItem>
          ))}
        </Select>
      </>
    </CustomFilterForm>
  );
};

export default CategoryWrapper;
