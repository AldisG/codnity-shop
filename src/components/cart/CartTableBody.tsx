import { TableBody, TableCell, TableRow } from '@mui/material';
import { useAppSelector } from '../../store/redux/hooks';
import SnackBarUniversal from '../utility/SnackBarUniversal';
import EmptyTableRow from './EmptyTableRow';
import RemoveButton from './RemoveButton';
import { useState } from 'react';

const CartTableBody = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const userCartContents = useAppSelector(
    ({ cartProductsSlice }) => cartProductsSlice.userCart
  );
  if (!userCartContents.length) {
    return <EmptyTableRow />;
  }
  const handleRemoveItem = () => {
    if(showSnackbar) {
      setShowSnackbar(false);
    } 
    setShowSnackbar(true);
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
      <SnackBarUniversal
        text="Item removed"
        caution={true}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
      />
      </TableBody>
    </>
  );
};

export default CartTableBody;
