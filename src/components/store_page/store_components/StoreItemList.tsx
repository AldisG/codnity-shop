import { Grid } from '@mui/material';
import { StoreItemType } from '../../../store/types';
import FilterWrapper from '../filter_components/FilterWrapper';
import LoadingItems from './LoadingItems';
import NoItemsToShow from './NoItemsToShow';
import StoreItem from './StoreItem';
import { useAppSelector } from '../../../store/redux/hooks';

export const StoreItemList = () => {
  const storeData = useAppSelector(
    ({ storeProductsSlice }) => storeProductsSlice.storeProductList
  );
  const filteredStoreData = useAppSelector(
    ({ storeProductsSlice }) => storeProductsSlice.filteredData
  );
  const { data: storeItems, isError, isLoading, isFetching } = storeData;

  if (isLoading || isFetching) {
    return <LoadingItems />;
  } else if (isError || !storeItems || storeItems.length == 0) {
    return <NoItemsToShow />;
  }

  const chooseStoreDataArray =
    filteredStoreData.length === 0 ? storeItems : filteredStoreData;

  return (
    <Grid container>
      <FilterWrapper />
      <Grid item xs={12} md={10}>
        <Grid container sx={{ margin: 0 }}>
          {chooseStoreDataArray.map((item: StoreItemType) => {
            return <StoreItem key={item.id} item={item} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StoreItemList;
