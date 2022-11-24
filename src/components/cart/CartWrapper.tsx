import { Button } from '@mui/material';
import { Box } from '@mui/system';
import CartComponent from './CartComponent';
import { useState } from 'react';
import { useAppSelector } from '../../store/redux/hooks';
import CartIconContainer from './CartIconContainer';

const CartWrapper = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const amountOfItemsInCart = useAppSelector(
    ({ cartProductsSlice }) => cartProductsSlice.userCart
  ).length;

  return (
    <Box justifySelf="flex-end">
      <Button
        variant="text"
        aria-label="Check your shopping cart"
        sx={{ display: 'flex', color: '#fff', py: 0.2 }}
        onClick={() => {
          console.log('clicked');
          setCartOpen(true);
        }}
      >
        <CartIconContainer amountOfItemsInCart={amountOfItemsInCart || 0} />
      </Button>
      <CartComponent cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </Box>
  );
};

export default CartWrapper;
