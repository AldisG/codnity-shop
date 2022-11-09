import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from '../../../store/redux/hooks';
import { changeActiveCategory } from '../../../store/slices/storeProductsSlice';
import { categories } from '../../utility/categories';
import CustomFilterForm from '../../utility/CustomFilterForm';

type P = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const CategoryWrapper: FC<P> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const dispatch = useAppDispatch()
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setSelectedCategory(value);
    dispatch(changeActiveCategory(value))
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
          {categories.map(({label, name}) => (
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
