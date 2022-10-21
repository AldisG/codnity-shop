import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetProductInfoQuery } from '../../store/services/storeApiCalls';
import ImageWrapper from '../store_page/store_components/ImageWrapper';
import LoadingItems from '../store_page/store_components/LoadingItems';
import Ratings from '../store_page/store_components/Ratings';
import { formatedNumb } from '../utility/formatPrice';
import LargeBtn from '../utility/LargeBtn';
import { StoreItemType } from '../utility/types';
import ProductNotFoundIcon from '../../img/no-content.png';
import ProductNotFound from './ProductNotFound';

const StoreProduct = () => {
  const [product, setProduct] = useState<StoreItemType>({
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
    rating: { rate: 0, count: 0 },
    title: '',
  });
  const { id } = useParams();
  const { data, isLoading, isSuccess, isError } = useGetProductInfoQuery(
    id || ''
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (data && isSuccess) {
      setProduct(data);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingItems />;
  }

  if (isError || !data) {
    return <ProductNotFound />;
  }
  const { category, description, image, price, rating, title } = product;

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>Go back</Button>
      <Grid container sx={{ width: '100%' }}>
        <Grid item xs={12} md={6} mt={5} gap={2}>
          <Box sx={{ width: { xs: '35%', md: '50%' }, margin: '0 auto' }}>
            <img src={image} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} p={4}>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Typography component="div" variant="h5" fontWeight={900}>
              $ {formatedNumb(price)}
            </Typography>
            <Typography component="div" variant="h3" fontWeight={700}>
              {title}
            </Typography>
            <Box
              sx={{
                justifySelf: 'flex-start',
                mb: 2,
              }}
            >
              <Ratings rating={rating} size="large" />
            </Box>
            <Typography
              component="div"
              variant="body1"
              fontSize={18}
              fontWeight={500}
            >
              {description}
            </Typography>
            {/* Choose the available amount, 1-10 */}
            <LargeBtn txt="ADD TO CART" />
            <Typography variant="body2" fontWeight={500}>
              Category: <b>{category}</b>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StoreProduct;