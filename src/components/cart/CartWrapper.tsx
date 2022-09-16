import { MenuItem, Typography } from '@mui/material';
import { BsCart3 } from 'react-icons/bs';

const CartWrapper = () => {
  return (
    <MenuItem sx={{ display: 'flex', gap: 2 }}>
      <Typography>Your Items</Typography>
      <BsCart3 />
    </MenuItem>
  );
};

export default CartWrapper;
