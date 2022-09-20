import { AppBar, Box, Grid } from '@mui/material';
import { FC } from 'react';

type P = {};

const FilterWrapper: FC<P> = ({}) => {
  return (
    <Grid
      item
      xs={12}
      md={2}
      display={{ xs: 'flex', md: 'grid' }}
      height={{ xs: '50px', md: '100vh' }}
    >
      <Box sx={{ backgroundColor: '#ddd', width: '100%' }}>A</Box>
      <Box sx={{ backgroundColor: '#eee', width: '100%' }}>B</Box>
    </Grid>
  );
};
// <AppBar sx={{ left: 0, top: 'auto' }}>
// </AppBar>

export default FilterWrapper;
