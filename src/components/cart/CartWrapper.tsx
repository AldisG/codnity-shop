import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { BsCart3, BsCartFill } from 'react-icons/bs';
import CartComponent from './CartComponent';
import { useState } from 'react';
import { useAppSelector } from '../../store/redux/hooks';
import ItemCounter from './ItemCounter';

const CartWrapper = () => {
  const storeItemCountDummy = 0;
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Box justifySelf="flex-end">
      <Button
        variant="text"
        aria-label="Check your shopping cart"
        sx={{ display: 'flex', color: '#fff' }}
          setCartOpen(true);
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {amountOfItemsInCart > 0 && <ItemCounter amountOfItemsInCart={amountOfItemsInCart} />}

          {amountOfItemsInCart > 0 ? (
            <BsCartFill size={30} />
          ) : (
            <BsCart3 size={30} />
          )}
        </Box>
      </Button>
      <CartComponent cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </Box>
  );
};

export default CartWrapper;
