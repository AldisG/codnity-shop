import { Box } from '@mui/system';
import { FC } from 'react';
import InlineBox from '../../utility/InlineBox';

type P = {
  fakeNew: number;
  price: number;
};

const merchSale = (value: number) => {
  return value < 40;
};
const calcSalePrice = (value: number) => {
  return value - value * 0.3;
};

const PriceInfoWrapper: FC<P> = ({ fakeNew, price }) => {
  return (
    <Box>
      {merchSale(fakeNew || 0) ? (
        <Box>${price}</Box>
      ) : (
        <Box>
          {/* Add stiling and stuff */}
          <Box>
            ${calcSalePrice(price)} from ${price}
          </Box>
          <Box>SALE</Box>
        </Box>
      )}
    </Box>
  );
};

export default PriceInfoWrapper;
