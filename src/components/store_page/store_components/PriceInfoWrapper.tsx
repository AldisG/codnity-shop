import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import Tag from '../elements/Tag';

type P = {
  fakeNew: number;
  price: number;
};
const formatedNumb = (value: number): string => {
  const oldNum = value.toFixed(2);
  return oldNum.includes('.') ? oldNum : `${oldNum}.00`;
};

const merchSale = (value: number) => {
  // fake sale by choosing items with title bellow 40 characters
  return value > 40;
};

const calcSalePrice = (value: number) => {
  return Number.parseFloat(String(value - value * 0.3));
};

const typographyItem = (elements: string) => {
  return (
    <Typography
      component="div"
      variant="subtitle1"
      sx={{
        fontWeight: '900',
        fontSize: 28,
      }}
    >
      {elements}
    </Typography>
  );
};

const PriceInfoWrapper: FC<P> = ({ fakeNew, price }) => {
  // Needs to be refactored - sale vs new
  return (
    <Box sx={{ pb: 1 }}>
      {merchSale(fakeNew || 0) ? (
        typographyItem(`$${formatedNumb(price)}`)
      ) : (
        <Box>
          {typographyItem(
            `$${formatedNumb(calcSalePrice(price))} from $${formatedNumb(
              price
            )}`
          )}
          <Tag title="SALE" />
        </Box>
      )}
    </Box>
  );
};

export default PriceInfoWrapper;
