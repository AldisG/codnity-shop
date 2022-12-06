import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductInfoQuery } from '../../store/services/storeApiCalls';
import { useAppDispatch } from '../../store/redux/hooks';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LoadingItems from '../store_page/store_components/LoadingItems';
import Ratings from '../store_page/store_components/Ratings';
import { formatedPrice } from '../utility/formatPrice';
import LargeBtn from '../utility/LargeBtn';
import { StoreItemType } from '../../store/types';
import ProductNotFound from './ProductNotFound';
import ChooseAmount from './ChooseAmount';
import { BsArrowLeft } from 'react-icons/bs';
import { addItemsToCart } from '../../store/slices/cartProductsSlice';
import { setShowSnackbar } from '../../store/slices/showSnackbarSlice';

const StoreProduct = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError } = useGetProductInfoQuery(
    id || ''
  );

  const [amount, setAmount] = useState(1);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (isLoading && !data) {
    return <LoadingItems />;
  }

  if (isError || !isSuccess || !data) {
    return <ProductNotFound />;
  }

  const {
    category,
    description,
    image,
    price,
    rating,
    title,
    id: ID,
  } = data as StoreItemType;

  const handleAddToCart = () => {
    dispatch(
      addItemsToCart({
        amount,
        id: ID,
        price,
        title,
      })
    );
    if (amount > 1) {
      setAmount(1);
    }
    dispatch(
      setShowSnackbar({
        open: true,
        text: 'Item was added to your cart!',
        caution: false,
      })
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Button onClick={() => navigate(-1)} sx={{ display: 'flex', gap: 1 }}>
        <BsArrowLeft size={16} />
        <Typography>Go back</Typography>
      </Button>
      <Grid container sx={{ width: '100%' }}>
        <Grid item xs={12} md={6} mt={5} gap={2}>
          <Box sx={{ width: { xs: '35%', md: '50%' }, margin: '0 auto' }}>
            <img src={image} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} p={4}>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Typography component="div" variant="h3" fontWeight={700}>
              {title}
            </Typography>
            <Typography component="div" variant="h5" fontWeight={900}>
              $ {formatedPrice(price)}
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
            <ChooseAmount amount={amount} setAmount={setAmount} />
            <LargeBtn txt="ADD TO CART" onClick={handleAddToCart} />
            <Typography variant="body2" fontWeight={500}>
              Category: <b>{category}</b>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StoreProduct;
