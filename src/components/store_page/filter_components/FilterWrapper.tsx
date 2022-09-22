import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import ArrangeWrapper from './ArrangeWrapper';
import CategoryPadding from './CategoryPadding';
import CategoryWrapper from './CategoryWrapper';
import PriceRangeWrapper from './PriceRangeWrapper';

type P = {
  categories: string[];
};

const FilterWrapper: FC<P> = ({ categories }) => {
  return (
    <Grid
      item
      xs={12}
      md={2}
      display={{ xs: 'flex', md: 'grid' }}
      height="max-content"
      // height={{ xs: '50px', md: '100vh' }}
    >
      <CategoryPadding>
        <CategoryWrapper categories={categories} />
      </CategoryPadding>
      <CategoryPadding>
        <ArrangeWrapper />
      </CategoryPadding>
      <CategoryPadding>
        <PriceRangeWrapper />
      </CategoryPadding>
    </Grid>
  );
};
// <AppBar sx={{ left: 0, top: 'auto' }}>
// </AppBar>

export default FilterWrapper;
