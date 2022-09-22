import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { FC } from 'react';
import { StoreItemType } from '../../utility/types';
import PriceInfoWrapper from './PriceInfoWrapper';
import Ratings from './Ratings';
import ImageWrapper from './ImageWrapper';
import CustomizedTooltips from '../elements/ShopItemTooltip';

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
  borderRadius: '0',
  boxShadow: 'none',
  display: 'grid',
  gridTemplateRows: '1fr .2fr',
}));

const StoreItem: FC<Props> = ({ item }) => {
  const { category, description, id, image, price, rating, title } = item;
  const editedTitle = () => {
    const words = title.replace(',', ' ').split(' ');
    if (words.length > 4) {
      return words.slice(0, 4).join(' ') + '...';
    }
    return `${words.join(' ')}.`;
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      sx={{
        margin: 0,
        p: 2,
        pt: 4,
        justifyContent: 'center',
        outline: '1px solid #333',
      }}
    >
      <CustomizedTooltips title={title}>
        <Item
          sx={{
            margin: 0,
            minheight: '100%',
          }}
          key={id}
        >
          <Box overflow="hidden">
            <Typography variant="h5" fontWeight="bold" component="div" pb={2}>
              {editedTitle()}
            </Typography>

            <ImageWrapper image={image} title={title} />
          </Box>
          <Box sx={{ zIndex: 2 }}>
            <PriceInfoWrapper fakeNew={title.length} price={price} />
            <Ratings rating={rating} />
          </Box>
        </Item>
      </CustomizedTooltips>
    </Grid>
  );
};

export default StoreItem;
