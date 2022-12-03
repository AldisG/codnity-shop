import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { formatedPrice } from '../../utility/formatPrice';

type P = {
  fakeNew: number;
  price: number;
};

const PriceInfoWrapper: FC<P> = ({ fakeNew, price }) => {
  // Needs to be refactored - sale vs new
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
