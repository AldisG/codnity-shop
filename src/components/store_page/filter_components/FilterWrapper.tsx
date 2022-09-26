import { Grid } from '@mui/material';
import { FC } from 'react';
import ArrangeWrapper from './ArrangeWrapper';
import CategoryPadding from './CategoryPadding';
import CategoryWrapper from './CategoryWrapper';
import PriceRangeWrapper from './PriceRangeWrapper';

type P = {
  categories: string[];
};

const mobileSpacers = { xs: 2, md: 0 };
const FilterWrapper: FC<P> = ({ categories }) => {
  return (
    <Grid
      item
      xs={12}
      md={2}
      display={{ xs: 'flex', md: 'grid' }}
      px={{ xs: 2, md: 0 }}
      mb={{ xs: 2, md: 0 }}
      height="max-content"
      gap={mobileSpacers}
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

export default FilterWrapper;
