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
import CloseButton from '../utility/CloseButton';
import CartTableHead from './CartTableHead';

type P = {
  cartOpen: boolean;
  setcartOpen: (value: boolean) => void;
};

const CartComponent: FC<P> = ({ cartOpen, setcartOpen }) => {
  return (
    <Dialog onClose={() => setcartOpen(false)} open={cartOpen} maxWidth="xl">
      <CloseButton setcartOpen={setcartOpen} />

      <DialogContent sx={{ pt: 0 }}>
        <Typography variant="h4" width={1000}>
          Your cart
        </Typography>
        <Box
          sx={{
            overflowY: 'auto',
            maxHeight: '300px',
            pb: 4
          }}
        >
          <CartTableHead />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CartComponent;
