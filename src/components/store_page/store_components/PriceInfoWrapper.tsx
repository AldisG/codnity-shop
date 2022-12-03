import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { formatedPrice } from '../../utility/formatPrice';

type P = {
  price: number;
};

const PriceInfoWrapper: FC<P> = ({ price }) => {
  return (
    <Box sx={{ pb: 1 }}>
      <Typography
        component="div"
        variant="subtitle1"
        sx={{
          fontWeight: '900',
          fontSize: 28,
        }}
      >
        ${formatedPrice(price)}
      </Typography>
    </Box>
  );
};

export default PriceInfoWrapper;
