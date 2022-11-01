import {
  Button,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../../store/redux/hooks';

const CartTableBody = () => {
  const userCartContents = useAppSelector(
    ({ cartProductsSlice }) => cartProductsSlice.userCart
  );

  return (
    <TableBody>
      {userCartContents.length === 0 && (
        <TableRow>
          <TableCell align="right">
            <Typography variant="h5" textAlign="left">
              You don't have any items in cart yet.
            </Typography>
          </TableCell>
        </TableRow>
      )}
      {userCartContents?.map((row, i) => (
        <TableRow
          key={`${row.title}${i}`}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell align="right">{row.price}</TableCell>
          <TableCell align="right">{row.amount}</TableCell>
          <TableCell align="right">
            {/* ITEM options/edit entry */}
            <Button
              variant="text"
              size="small"
              onClick={
                () => ''
                // setCartItems((prev) => prev.filter((it) => it.id !== row.id))
                // dispatch taisit, filter
              }
              sx={{
                color: '#333',
              }}
            >
              X
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CartTableBody;
