import { Grid } from '@mui/material';
import { FC } from 'react';
import FilterWrapper from '../filter_components/FilterWrapper';

const StoreContentWrapper: FC<React.ReactNode> = ({ children }) => {
  return (
    <Grid container>
      <FilterWrapper />
      <Grid item xs={12} md={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default StoreContentWrapper;
