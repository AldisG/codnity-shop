import { Grid } from '@mui/material';
import { FC, useState } from 'react';
import { convertSelectValueToString } from '../../utility/convertSelectValueToString';
import ArrangeWrapper from './ArrangeWrapper';
import CategoryPadding from './CategoryPadding';
import CategoryWrapper from './CategoryWrapper';
import PriceRangeWrapper from './PriceRangeWrapper';

type P = {
  categories: string[];
};

const priceRanges = ['all', '0-20', '20-100', '100-1000'];
const arangeByOptions = [
  { type: 'date', a: 'youngest first', b: 'oldest first' },
  { type: 'price', a: 'highest first', b: 'lowest first' },
  { type: 'rating', a: 'highest first', b: 'lowest first' },
];

const defaultArrangeOptionsValue = convertSelectValueToString(
  arangeByOptions[0].type,
  arangeByOptions[0].a
);

const mobileScreenSpacing = { xs: 2, md: 0 };

const FilterWrapper: FC<P> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [changeOrder, setchangeOrder] = useState(defaultArrangeOptionsValue);
  const [priceRange, setPriceRange] = useState(priceRanges[0]);

  return (
    <Grid
      item
      xs={12}
      md={2}
      display={{ xs: 'flex', md: 'grid' }}
      px={{ xs: 2, md: 0 }}
      mb={{ xs: 2, md: 0 }}
      height="max-content"
      gap={mobileScreenSpacing}
    >
      <CategoryPadding>
        <CategoryWrapper
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </CategoryPadding>

      <CategoryPadding>
        <ArrangeWrapper
          changeOrder={changeOrder}
          arangeByOptions={arangeByOptions}
          setchangeOrder={setchangeOrder}
        />
      </CategoryPadding>

      <CategoryPadding>
        <PriceRangeWrapper
          priceRange={priceRange}
          priceRanges={priceRanges}
          setPriceRange={setPriceRange}
        />
      </CategoryPadding>
    </Grid>
  );
};

export default FilterWrapper;
