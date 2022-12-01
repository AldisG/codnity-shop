import { TableBody, TableCell, TableRow } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import EmptyTableRow from './EmptyTableRow';
import RemoveButton from './RemoveButton';
import { removeAnItem } from '../../store/slices/cartProductsSlice';
import { setShowSnackbar } from '../../store/slices/showSnackbarSlice';

const CartTableBody = () => {
  const dispatch = useAppDispatch();

  const userCartContents = useAppSelector(
    ({ cartProductsSlice }) => cartProductsSlice.userCart
  );

  if (!userCartContents.length) {
    return <EmptyTableRow />;
  }
  const handleRemoveItem = (id: number) => {
    dispatch(removeAnItem(id));
    dispatch(
      setShowSnackbar({
        open: true,
        text: 'Item was removed!',
        caution: true,
      })
    );
  };
  return (
    <>
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
              <RemoveButton onClick={handleRemoveItem} itemId={id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CartTableBody;
