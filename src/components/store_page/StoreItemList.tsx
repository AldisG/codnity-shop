import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useGetStoreItemsQuery } from '../../store/services/storeApiCalls';
import { StoreItemType } from '../utility/types';
import LoadingItems from './LoadingItems';
import NoItemsToShow from './NoItemsToShow';
import StoreItem from './StoreItem';

export const StoreItemList = () => {
  const { data, error, isLoading, isError, isFetching } =
    useGetStoreItemsQuery('');
  // add onRendered timer, to show loading item for 1s at least (no flashing items fix)
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading || isFetching) {
    return <LoadingItems />;
  } else if (isError || !data || data.length == 0) {
    return <NoItemsToShow />;
  }

  return (
    <Grid container>
      <Grid item xs={12} md={2} display={{ xs: 'grid', md: 'flex' }}>
        <Box>Sidebar stuff</Box>
      </Grid>

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
