import {
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { useAppSelector } from '../../store/redux/hooks';
import EmptyTableRow from './EmptyTableRow';
import RemoveButton from './RemoveButton';

const CartTableBody = () => {
  const userCartContents = useAppSelector(
    ({ cartProductsSlice }) => cartProductsSlice.userCart
  );
    if (!userCartContents.length){
      return <EmptyTableRow />
    }
  return (
    <TableBody>
      {userCartContents?.map(({ amount, id, price, title }, i) => (
        <TableRow
          key={`${title}${i}`}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {title}
          </TableCell>
          <TableCell align="right">{price}</TableCell>
          <TableCell align="right">{amount}</TableCell>
          <TableCell align="right">
            <RemoveButton itemId={id} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CartTableBody;
