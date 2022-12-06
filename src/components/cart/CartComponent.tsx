import { Dialog, DialogContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { removeAllItems } from '../../store/slices/cartProductsSlice';
import { setShowSnackbar } from '../../store/slices/showSnackbarSlice';
import ActionButton from '../utility/ActionButton';
import CloseButton from '../utility/CloseButton';
import MessageModal from '../utility/MessageModal';
import CartTableHead from './CartTableHead';
import TotalPrice from './TotalPrice';

type P = {
  cartOpen: boolean;
  setCartOpen: (value: boolean) => void;
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

const CartComponent: FC<P> = ({ cartOpen, setCartOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const userCartContents = useAppSelector(
    ({ cartProductsSlice }) => cartProductsSlice.userCart
  );

  const handleRemoveAllItems = () => {
    if (userCartContents.length > 0) {
      dispatch(
        setShowSnackbar({
          open: true,
          text: 'All items were removed!',
          caution: true,
        })
      );
      dispatch(removeAllItems());
    }
  };
  const handleCloseCart = () => {
    setCartOpen(false);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const handlePurchaseItems = () => {
    setModalIsOpen(true);
    dispatch(removeAllItems());
    dispatch(
      setShowSnackbar({
        open: true,
        text: 'Purchase complete!',
        caution: false,
      })
    );
  };
  return (
    <Dialog onClose={() => setCartOpen(false)} open={cartOpen} maxWidth="xl">
      <CloseButton onClick={handleCloseCart} />

      <DialogContent sx={{ pt: 0 }}>
        <Typography variant="h4">Your cart</Typography>
        <Box sx={tableContainerStyle}>
          <Box sx={tableWrapperStyle}>
            <CartTableHead />
          </Box>
        </Box>
        <TotalPrice userCartContents={userCartContents} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ActionButton
            text="remove all"
            disabled={userCartContents.length === 0}
            lowAccent={true}
            caution={true}
            simpleFunc={handleRemoveAllItems}
          />
          <ActionButton
            text="Purchase"
            disabled={!userCartContents.length}
            simpleFunc={handlePurchaseItems}
          />
        </Box>
      </DialogContent>
      <MessageModal
        modalIsOpen={modalIsOpen}
        handleClose={handleCloseModal}
        purchased
      />
    </Dialog>
  );
};

export default CartComponent;
