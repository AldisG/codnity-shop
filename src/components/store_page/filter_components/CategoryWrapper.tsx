import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC, useState } from 'react';

type P = {
  categories: string[];
};

const CategoryWrapper: FC<P> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
    // fire displayCategory event from store (create it)
  };

  return (
    <FormControl variant="standard" fullWidth sx={{ backgroundColor: '#eee' }}>
      <InputLabel id="select-category-label">Categories</InputLabel>
      <Select
        labelId="select-category-label"
        id="select-category"
        value={selectedCategory}
        label="category"
        onChange={handleChange}
      >
        {categories.map((category) => (
          <MenuItem value={category}>{category}</MenuItem>
        ))}{' '}
      </Select>
    </FormControl>
  );
};

export default CategoryWrapper;
