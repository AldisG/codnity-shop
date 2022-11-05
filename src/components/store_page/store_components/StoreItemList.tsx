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
  const {
    data: storeItems,
    isError,
    isLoading,
    isFetching,
  } = storeData;

  const dataFiltering = storeItems?.length
    ? storeItems?.map((item: StoreItemType) => item.category)
    : ([''] as string[]);
  // @ts-ignore
  const filteredCategories = new Set<string[]>(Array.from(dataFiltering));
  // @ts-ignore
  const categories = ['all', ...filteredCategories];

  if (isLoading || isFetching) {
    return <LoadingItems />;
  } else if (isError || !storeItems || storeItems.length == 0) {
    return <NoItemsToShow />;
  }

  return (
    <Grid container>
      <FilterWrapper categories={categories || ['']} />
      <Grid item xs={12} md={10}>
        <Grid container sx={{ margin: 0 }}>
          {storeItems.map((item: StoreItemType) => {
            return <StoreItem key={item.id} item={item} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StoreItemList;
