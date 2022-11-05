import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import CustomFilterForm from '../../utility/CustomFilterForm';

type P = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const CategoryWrapper: FC<P> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setSelectedCategory(value);
    // fire displayCategory event from store (create it)
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
          {categories.map((category) => (
            <MenuItem value={category} key={category}>
              <Typography>{category}</Typography>
            </MenuItem>
          ))}{' '}
        </Select>
      </>
    </CustomFilterForm>
  );
};

export default CategoryWrapper;
