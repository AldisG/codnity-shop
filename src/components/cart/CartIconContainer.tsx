import { Box } from '@mui/material';
import { FC } from 'react';
import { BsCart3, BsCartFill } from 'react-icons/bs';
import ItemCounter from './ItemCounter';

type P = {
  amountOfItemsInCart: number;
};

const CartIconContainer: FC<P> = ({ amountOfItemsInCart }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {amountOfItemsInCart > 0 && (
        <ItemCounter amountOfItemsInCart={amountOfItemsInCart} />
      )}

      {amountOfItemsInCart > 0 ? (
        <BsCartFill size={30} />
      ) : (
        <BsCart3 size={30} />
      )}
    </Box>
  );
};

export default CartIconContainer;
