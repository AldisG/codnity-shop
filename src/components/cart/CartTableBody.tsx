import { TableBody, TableCell, TableRow } from '@mui/material';

const CartTableBody = () => {
  const cartItems: any[] | null = [];

  return (
    <TableBody>
      {cartItems?.map((row) => (
        <TableRow
          key={row.productName}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.productName}
          </TableCell>
          <TableCell align="right">{row.price}</TableCell>
          <TableCell align="right">{row.category}</TableCell>
          <TableCell align="right">{row.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CartTableBody;
