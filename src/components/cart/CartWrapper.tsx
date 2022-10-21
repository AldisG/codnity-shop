import { Avatar, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BsCart3, BsCartFill } from 'react-icons/bs';
import CartComponent from './CartComponent';
import { useState } from 'react';

const CartWrapper = () => {
  const storeItemCountDummy = 0;
  const [cartOpen, setcartOpen] = useState(false);

  return (
    <Box>
      <MenuItem
        value="cart items"
        sx={{ display: 'flex' }}
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
      </MenuItem>
      <CartComponent cartOpen={cartOpen} setcartOpen={setcartOpen} />
    </Box>
  );
};

export default CartWrapper;
