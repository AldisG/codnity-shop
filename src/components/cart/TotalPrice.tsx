import { Box, Typography } from '@mui/material';
import { CartItem } from '../../store/types';
import { formatedPrice } from '../utility/formatPrice';

const TotalPrice = ({ userCartContents }: { userCartContents: CartItem[] }) => {
  const calculatedTotalPrice =
    userCartContents.length > 0
      ? formatedPrice(
          userCartContents
            .map(({ price, amount }) => {
              return price * amount;
            })
            .reduce((a, b) => a + b)
        )
      : formatedPrice(0);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        gap: 1,
        pt: 2,
      }}
    >
      <Typography component="div">Total:</Typography>
      <Typography component="span" variant="h5" fontWeight="bold">
        {calculatedTotalPrice}$
      </Typography>
    </Box>
  );
};

export default TotalPrice;
