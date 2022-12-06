import { TableCell } from '@mui/material';
import { FC, ReactNode } from 'react';
import { fontSize } from '../utility/sharedCartStyle';

const style = {
  fontSize: fontSize,
  maxWidth: {
    sm: '150px',
    md: '400px',
  },
};
type P = {
  children: string | number | ReactNode;
  first?: boolean;
};

const CartTableCell: FC<P> = ({ first, children }) => {
  return (
    <>
      {first ? (
        <TableCell sx={style} component="th" scope="row">
          {children}
        </TableCell>
      ) : (
        <TableCell sx={style} align="right">
          {children}
        </TableCell>
      )}
    </>
  );
};

export default CartTableCell;
