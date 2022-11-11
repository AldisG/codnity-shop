import { Grid } from '@mui/material';
import { useState } from 'react';
import { categories } from '../../utility/categories';
import { convertSelectValueToString } from '../../utility/convertSelectValueToString';
import ArrangeWrapper from './ArrangeWrapper';
import CategoryPadding from './CategoryPadding';
import CategoryWrapper from './CategoryWrapper';
import PriceRangeWrapper from './PriceRangeWrapper';

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

const FilterWrapper = () => {
  // const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [changeOrder, setchangeOrder] = useState(defaultArrangeOptionsValue);
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  // parrent component doesnt need to pass down def and arrays..? tpt viss caur store iet, seit nekos netiek editots
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
        // selectedCategory={selectedCategory}
        // setSelectedCategory={setSelectedCategory}
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
