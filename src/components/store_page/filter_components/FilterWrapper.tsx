import { Grid } from '@mui/material';
import { useState } from 'react';
import { arangeByOptions, priceRanges } from '../../utility/options';
import { convertSelectValueToString } from '../../utility/convertSelectValueToString';
import ArrangeWrapper from './ArrangeWrapper';
import CategoryPadding from './CategoryPadding';
import CategoryWrapper from './CategoryWrapper';
import PriceRangeWrapper from './PriceRangeWrapper';

const defaultArrangeOptionsValue = convertSelectValueToString(
  arangeByOptions[0].type,
  arangeByOptions[0].a
);

const mobileScreenSpacing = { xs: 2, md: 0 };

const FilterWrapper = () => {
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
        <CategoryWrapper />
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
