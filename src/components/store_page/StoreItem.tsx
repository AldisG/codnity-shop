import { Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { FC } from 'react';
import InlineBox from '../utility/InlineBox';
import { StoreItemType } from '../utility/types';
import DescWrapper from './DescWrapper';
import Ratings from './elements/Ratings';
import ImageWrapper from './ImageWrapper';

type Props = {
  item: StoreItemType;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  margin: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
  overflow: 'hidden',
  borderRadius: '0',
  border: '12px slid #333',
  boxShadow: 'none',
}));

const StoreItem: FC<Props> = ({ item }) => {
  const { category, description, id, image, price, rating, title } = item;
  // add tooltip on hover
  // add bg colored block that fades in bg color from transparent to hide longer title(instead of ...)
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ margin: 0, p: 2, pt: 4, border: '1px solid #333' }}
    >
      <Item
        sx={{
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
        key={id}
      >
        <Typography variant="h5" fontWeight="bold" component="div">
          {title.slice(0, 20) + '...'}
        </Typography>

        <DescWrapper description={description} />
        {/* Price, sale, sold out sections */}

        <ImageWrapper image={image} title={title} />
        <Ratings rating={rating} />
      </Item>
    </Grid>
  );
};

export default StoreItem;
