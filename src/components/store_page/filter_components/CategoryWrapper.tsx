import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../../store/redux/hooks';
import { handleFiltering } from '../../../store/slices/storeProductsSlice';
import { categories } from '../../utility/options';
import CustomFilterForm from '../../utility/CustomFilterForm';

const CategoryWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectedCategory(value);
    dispatch(handleFiltering({type: 'category', value}))
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
