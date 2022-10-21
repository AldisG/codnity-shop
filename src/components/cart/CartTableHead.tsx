import {
  Table,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import CartTableBody from './CartTableBody';
import NoItemsAtCart from './NoItemsAtCart';

const CartTableHead = () => {
  const cartItemCount = 3;
  const tableHeadContent = [
    "Product name",
    "Price",
    "Category",
    "Amount",
  ]
  if (!cartItemCount) {
    return <NoItemsAtCart />;
  }
  return (
    <Box>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeadContent.map((it, i: number) => (
              <TableCell align={!i ? 'left' : 'right'} >{it}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* rows map */}
        <CartTableBody />
      </Table>
    </Box>
  );
};

export default CartTableHead;
