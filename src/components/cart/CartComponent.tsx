import {
  Dialog,
  DialogContent,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useAppSelector } from '../../store/redux/hooks';
import ActionButton from '../utility/ActionButton';
import CloseButton from '../utility/CloseButton';
import CartTableHead from './CartTableHead';

type P = {
  cartOpen: boolean;
  setcartOpen: (value: boolean) => void;
};

const tableWrapperStyle = {
  overflowY: 'auto',
  maxHeight: '300px',
  py: 1,
  backgroundColor: '#dddddd33',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 10px 10px -12px inset, rgba(0, 0, 0, 0.3) 0px 10px 36px -18px inset',
};
const tableContainerStyle = {
  boxShadow: '4px 4px 8px #ccc',
};

const handlePurchaseItems = () => {
  alert('create success modal, clear cart list, send to store page');
};

const CartComponent: FC<P> = ({ cartOpen, setcartOpen }) => {
  const userCartContents = useAppSelector(
    ({ cartProductsSlice }) => cartProductsSlice.userCart
  );
  console.log(userCartContents);
  return (
    <Dialog onClose={() => setcartOpen(false)} open={cartOpen} maxWidth="xl">
      <CloseButton setcartOpen={setcartOpen} />

      <DialogContent sx={{ pt: 0 }}>
        <Typography variant="h4" width={1000}>
          Your cart
        </Typography>
        <Box sx={tableContainerStyle}>
          <Box sx={tableWrapperStyle}>
            <CartTableHead />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: 1,
            pt: 2,
          }}
        >
          <Typography component="div">Total:</Typography>
          <Typography component="span" variant="h5" fontWeight="bold">
            {99}$
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ActionButton text="remove all" lowAccent={true} caution={true} />
          <ActionButton text="Purchase" simpleFunc={handlePurchaseItems} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CartComponent;
