import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { FC } from 'react';
import PriceInfoWrapper from './PriceInfoWrapper';
import Ratings from './Ratings';
import ImageWrapper from './ImageWrapper';
import CustomizedTooltips from '../elements/ShopItemTooltip';
import { Link } from 'react-router-dom';
import { StoreItemType } from '../../../store/types';

type Props = {
  item: StoreItemType;
};

const Card = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
  height: 'max-cntent',
  borderRadius: '0',
  boxShadow: 'none',
  display: 'grid',
  gridTemplateRows: '.2fr 1fr .2fr',
  alignItems: 'center',
  gap: 2,
}));

const StoreItem: FC<Props> = ({ item }) => {
  const { id, image, price, rating, title } = item;

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
        p: 2,
        pt: 4,
        outline: '1px solid #333',
        cursor: 'pointer',
      }}
    >
      <Link to={'/store/' + id}>
        <Box sx={{ minHeight: '100%' }}>
          <CustomizedTooltips title={title}>
            <Card key={id}>
              <Typography variant="h5" fontWeight="bold" component="div">
                {editedTitle()}
              </Typography>
              <ImageWrapper image={image} title={title} />
              <Box sx={{ zIndex: 2 }}>
                <PriceInfoWrapper price={price} />
                <Ratings rating={rating} />
              </Box>
            </Card>
          </CustomizedTooltips>
        </Box>
      </Link>
    </Grid>
  );
};

export default StoreItem;
