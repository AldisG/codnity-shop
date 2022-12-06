import { TableBody, TableCell, TableRow } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import EmptyTableRow from './EmptyTableRow';
import RemoveButton from './RemoveButton';
import { removeAnItem } from '../../store/slices/cartProductsSlice';
import { setShowSnackbar } from '../../store/slices/showSnackbarSlice';
import CartTableCell from './CartTableCell';

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
            <CartTableCell first>{title}</CartTableCell>
            <CartTableCell>{price}</CartTableCell>
            <CartTableCell>{amount}</CartTableCell>
            <CartTableCell>
              <RemoveButton onClick={handleRemoveItem} itemId={id} />
            </CartTableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CartTableBody;
