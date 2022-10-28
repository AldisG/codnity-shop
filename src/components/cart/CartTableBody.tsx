import {
  Button,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const CartTableBody = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      productName: 'Spoon',
      price: '99',
      category: 'kitchen',
      amount: '1',
    },
    {
      id: 2,
      productName: 'Spoon',
      price: '99',
      category: 'kitchen',
      amount: '1',
    },
    {
      id: 3,
      productName: 'Spoon',
      price: '99',
      category: 'kitchen',
      amount: '1',
    },
    {
      id: 4,
      productName: 'Spoon',
      price: '99',
      category: 'kitchen',
      amount: '1',
    },
    {
      id: 5,
      productName: 'Spoon',
      price: '99',
      category: 'kitchen',
      amount: '1',
    },
    {
      id: 6,
      productName: 'Spoon',
      price: '99',
      category: 'kitchen',
      amount: '1',
    },
  ]);

  return (
    <TableBody>
      {cartItems.length === 0 && (
        <TableRow>
          <TableCell align="right">
            <Typography variant="h5" textAlign="left">
              You don't have any items in cart yet.
            </Typography>
          </TableCell>
        </TableRow>
      )}
      {cartItems?.map((row, i) => (
        <TableRow
          key={`${row.productName}${i}`}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.productName}
          </TableCell>
          <TableCell align="right">{row.price}</TableCell>
          <TableCell align="right">{row.category}</TableCell>
          <TableCell align="right">{row.amount}</TableCell>
          <TableCell align="right">
            {/* ITEM options/edit entry */}
            <Button
              variant="text"
              size="small"
              onClick={() =>
                setCartItems((prev) => prev.filter((it) => it.id !== row.id))
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
