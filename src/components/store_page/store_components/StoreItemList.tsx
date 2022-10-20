import { Grid } from '@mui/material';
// import { useEffect, useState } from 'react';
import { useGetStoreItemsQuery } from '../../../store/services/storeApiCalls';
import { StoreItemType } from '../../utility/types';
import FilterWrapper from '../filter_components/FilterWrapper';
import LoadingItems from './LoadingItems';
import NoItemsToShow from './NoItemsToShow';
import StoreItem from './StoreItem';

export const StoreItemList = () => {
  const { data, error, isLoading, isError, isFetching, isSuccess } =
    useGetStoreItemsQuery('');
  // add onRendered timer, to show loading item for 1s at least (no flashing items fix)
  const dataFiltering = data?.length
    ? data?.map((item: StoreItemType) => item.category)
    : ([''] as string[]);

  const filteredCategories = new Set<string[]>(Array.from(dataFiltering));
  // @ts-ignore
  const categories = ['all', ...filteredCategories];

  if (isLoading || isFetching) {
    return <LoadingItems />;
  } else if (isError || !data || data.length == 0) {
    return <NoItemsToShow />;
  }

  return (
    <Grid container>
      <FilterWrapper categories={categories || ['']} />

      <Grid item xs={12} md={10}>
        <Grid container sx={{ margin: 0 }}>
          {data.map((item: StoreItemType) => {
            return <StoreItem key={item.id} item={item} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StoreItemList;
