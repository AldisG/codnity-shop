import {
  AvatarGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  IconButton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CartComponent = () => {
  return (
    <Dialog onClose={() => ''} open={true} maxWidth="xl" >
      <DialogContent >
      <Typography variant="h4" width={1000}>
        Your cart
      </Typography>
      <DialogTitle></DialogTitle>

      </DialogContent>
    </Dialog>
  );
};

export default CartComponent;
