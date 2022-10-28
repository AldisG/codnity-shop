import { Avatar, Button, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BsCart3, BsCartFill } from 'react-icons/bs';
import CartComponent from './CartComponent';
import { useState } from 'react';

const CartWrapper = () => {
  const storeItemCountDummy = 0;
  const [cartOpen, setcartOpen] = useState(false);

  return (
    <Box>
      <Button
        variant="text"
        aria-label="Check your shopping cart"
        sx={{ display: 'flex', color: '#fff', py: 0.2 }}
        onClick={() => {
          console.log('clicked');
          setcartOpen(true);
        }}
      >
        <Typography variant="body1">Cart</Typography>
        {storeItemCountDummy > 0 && (
          <Avatar
            sx={{
              bgcolor: '#05c46b',
              color: '#fff',
              width: '25px',
              height: '25px',
              fontSize: 18,
              ml: 1,
            }}
          >
            {storeItemCountDummy}
          </Avatar>
        )}
        <Box pl={1}>
          {storeItemCountDummy > 0 ? (
            <BsCartFill size={25} />
          ) : (
            <BsCart3 size={25} />
          )}
        </Box>
      </Button>
      <CartComponent cartOpen={cartOpen} setcartOpen={setcartOpen} />
    </Box>
  );
};

export default CartWrapper;
